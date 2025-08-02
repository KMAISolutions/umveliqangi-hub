import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";

interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'twitter';
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  url: string;
}

const SocialFeed = () => {
  // Mock social media data - in a real app, this would come from social media APIs
  const socialPosts: SocialPost[] = [
    {
      id: "1",
      platform: "facebook",
      content: "Alhamdulillah! Our Qur'an competition this weekend saw amazing participation from young learners. May Allah bless their dedication to learning His words. 🤲📖",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      likes: 45,
      comments: 12,
      shares: 8,
      timestamp: "2 hours ago",
      url: "#"
    },
    {
      id: "2", 
      platform: "facebook",
      content: "Join us tomorrow for our weekly community feeding program. Every Friday at 1 PM after Jum'a prayers. Together we serve, together we grow. 🍽️❤️",
      likes: 32,
      comments: 6,
      shares: 15,
      timestamp: "1 day ago",
      url: "#"
    },
    {
      id: "3",
      platform: "facebook", 
      content: "New entrepreneurship workshop starting next week! Learn digital skills, business planning, and connect with mentors. Registration open now. 💼✨",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      likes: 28,
      comments: 9,
      shares: 11,
      timestamp: "2 days ago", 
      url: "#"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return '📘';
      case 'instagram':
        return '📷';
      case 'twitter':
        return '🐦';
      default:
        return '📱';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'bg-blue-500';
      case 'instagram':
        return 'bg-pink-500';
      case 'twitter':
        return 'bg-sky-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📢</span>
          Community Updates
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {socialPosts.map((post) => (
          <div key={post.id} className="border border-border/50 rounded-lg p-4 space-y-3">
            {/* Platform Badge */}
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="flex items-center gap-1">
                <span>{getPlatformIcon(post.platform)}</span>
                <span className="capitalize">{post.platform}</span>
              </Badge>
              <span className="text-xs text-muted-foreground">{post.timestamp}</span>
            </div>

            {/* Content */}
            <p className="text-sm text-foreground leading-relaxed">{post.content}</p>

            {/* Image */}
            {post.image && (
              <div className="rounded-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Social post"
                  className="w-full h-32 object-cover"
                />
              </div>
            )}

            {/* Engagement Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/30">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="w-3 h-3" />
                  {post.shares}
                </span>
              </div>
              <a 
                href={post.url}
                className="flex items-center gap-1 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3 h-3" />
                View
              </a>
            </div>
          </div>
        ))}

        {/* Follow Us */}
        <div className="text-center pt-4 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-3">Follow us for more updates</p>
          <div className="flex justify-center gap-3">
            <a href="#" className="text-2xl hover:scale-110 transition-transform">📘</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">📷</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">📺</a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialFeed;