import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, ArrowRight, MessageCircle, Heart } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
  tags: string[];
}

interface BlogSectionProps {
  title: string;
  category: string;
  posts: BlogPost[];
  showAll?: boolean;
}

const BlogSection = ({ title, category, posts, showAll = false }: BlogSectionProps) => {
  const displayPosts = showAll ? posts : posts.slice(0, 3);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "religious": return "bg-emerald-500";
      case "education": return "bg-amber-500";
      case "community": return "bg-blue-500";
      case "skills": return "bg-purple-500";
      case "family": return "bg-pink-500";
      default: return "bg-primary";
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground">Latest updates and stories from our community</p>
          </div>
          {!showAll && (
            <Button variant="outline">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <Card key={post.id} className="shadow-elegant hover:shadow-mosque transition-all duration-300 overflow-hidden">
              {post.image && (
                <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(category)} text-white`}>
                      {category}
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;