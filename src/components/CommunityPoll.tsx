import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Clock } from "lucide-react";

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  question: string;
  description: string;
  options: PollOption[];
  totalVotes: number;
  endDate: string;
  isActive: boolean;
}

const CommunityPoll = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);

  // Mock poll data - in a real app, this would come from your database
  const [currentPoll, setCurrentPoll] = useState<Poll>({
    id: "1",
    question: "What new program would you like to see at our community center?",
    description: "Help us prioritize our next community initiative for 2024",
    options: [
      { id: "a", text: "Youth Sports & Recreation Program", votes: 23 },
      { id: "b", text: "Adult Computer Literacy Classes", votes: 31 },
      { id: "c", text: "Community Garden & Farming Workshop", votes: 18 },
      { id: "d", text: "Women's Entrepreneurship Incubator", votes: 28 }
    ],
    totalVotes: 100,
    endDate: "March 15, 2024",
    isActive: true
  });

  const handleVote = () => {
    if (!selectedOption || hasVoted) return;

    // Update the poll with the new vote
    setCurrentPoll(prev => ({
      ...prev,
      options: prev.options.map(option =>
        option.id === selectedOption
          ? { ...option, votes: option.votes + 1 }
          : option
      ),
      totalVotes: prev.totalVotes + 1
    }));

    setHasVoted(true);
  };

  const getPercentage = (votes: number) => {
    return currentPoll.totalVotes > 0 ? Math.round((votes / currentPoll.totalVotes) * 100) : 0;
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          Community Poll
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{currentPoll.totalVotes} votes</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Ends {currentPoll.endDate}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-foreground mb-2">{currentPoll.question}</h3>
          <p className="text-sm text-muted-foreground">{currentPoll.description}</p>
        </div>

        <div className="space-y-3">
          {currentPoll.options.map((option) => (
            <div key={option.id} className="space-y-2">
              <div 
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedOption === option.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                } ${hasVoted ? 'cursor-default' : ''}`}
                onClick={() => !hasVoted && setSelectedOption(option.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="poll-option"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => !hasVoted && setSelectedOption(option.id)}
                      disabled={hasVoted}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-sm font-medium">{option.text}</span>
                  </div>
                  {hasVoted && (
                    <Badge variant="outline" className="text-xs">
                      {getPercentage(option.votes)}%
                    </Badge>
                  )}
                </div>
                
                {hasVoted && (
                  <div className="mt-2 ml-7">
                    <Progress 
                      value={getPercentage(option.votes)} 
                      className="h-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {option.votes} votes
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!hasVoted && currentPoll.isActive && (
          <Button 
            onClick={handleVote}
            disabled={!selectedOption}
            className="w-full"
            variant="islamic"
          >
            Submit Vote
          </Button>
        )}

        {hasVoted && (
          <div className="text-center p-3 bg-accent/20 rounded-lg">
            <p className="text-sm text-foreground font-medium">Thank you for voting! 🗳️</p>
            <p className="text-xs text-muted-foreground mt-1">
              Your voice helps shape our community programs
            </p>
          </div>
        )}

        {!currentPoll.isActive && (
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground">This poll has ended</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommunityPoll;