import { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart, MessageCircle, ArrowLeft, DollarSign, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRouter } from './Router';

const freelancers = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Full-Stack Developer",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    description: "Experienced full-stack developer with 6+ years building scalable web applications. Specialized in React, Node.js, and cloud architecture.",
    completedJobs: 89,
    responseTime: "1 hour",
    successRate: "98%",
    featured: true,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "UI/UX Designer",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    reviews: 203,
    hourlyRate: 75,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    description: "Creative designer specializing in user-centered design and brand identity. Proven track record of improving user engagement.",
    completedJobs: 156,
    responseTime: "2 hours",
    successRate: "95%",
    featured: true,
    online: false,
    portfolio: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Content Writer & SEO Specialist",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    reviews: 94,
    hourlyRate: 45,
    skills: ["SEO Writing", "Copywriting", "Content Strategy", "WordPress", "Google Analytics"],
    description: "Professional writer creating engaging content that drives results. Specialized in SEO optimization and conversion copywriting.",
    completedJobs: 78,
    responseTime: "30 min",
    successRate: "100%",
    featured: false,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 4,
    name: "David Kim",
    title: "Digital Marketing Expert",
    location: "Toronto, CA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    reviews: 156,
    hourlyRate: 65,
    skills: ["Google Ads", "Facebook Ads", "Analytics", "Email Marketing", "Conversion Optimization"],
    description: "Growth-focused marketer with proven track record of increasing ROI. Expert in paid advertising and performance marketing.",
    completedJobs: 112,
    responseTime: "1 hour",
    successRate: "92%",
    featured: false,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Ana Silva",
    title: "Data Scientist",
    location: "São Paulo, Brazil",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviews: 67,
    hourlyRate: 55,
    skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "TensorFlow"],
    description: "Data scientist with expertise in machine learning and predictive analytics. Turning complex data into actionable insights.",
    completedJobs: 43,
    responseTime: "3 hours",
    successRate: "96%",
    featured: false,
    online: false,
    portfolio: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 6,
    name: "James Thompson",
    title: "Mobile App Developer",
    location: "Melbourne, AU",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 4.6,
    reviews: 89,
    hourlyRate: 70,
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    description: "Mobile app developer specializing in cross-platform solutions. Built 50+ apps with millions of downloads.",
    completedJobs: 67,
    responseTime: "4 hours",
    successRate: "94%",
    featured: false,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
    ]
  }
];

const categories = [
  "All Skills",
  "Web Development",
  "Mobile Development",
  "Design & Creative", 
  "Writing & Content",
  "Digital Marketing",
  "Data Science",
  "DevOps & Cloud"
];

export function FindFreelancersPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [budgetRange, setBudgetRange] = useState('All Budgets');
  const [savedFreelancers, setSavedFreelancers] = useState<number[]>([]);

  const toggleSaveFreelancer = (freelancerId: number) => {
    setSavedFreelancers(prev => 
      prev.includes(freelancerId) 
        ? prev.filter(id => id !== freelancerId)
        : [...prev, freelancerId]
    );
  };

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All Skills' || 
                           freelancer.skills.some(skill => {
                             switch(selectedCategory) {
                               case 'Web Development': return ['React', 'Node.js', 'Python', 'AWS'].includes(skill);
                               case 'Design & Creative': return ['Figma', 'Adobe XD', 'Prototyping'].includes(skill);
                               case 'Writing & Content': return ['SEO Writing', 'Copywriting', 'Content Strategy'].includes(skill);
                               case 'Digital Marketing': return ['Google Ads', 'Facebook Ads', 'Analytics'].includes(skill);
                               case 'Data Science': return ['Python', 'Machine Learning', 'Data Visualization'].includes(skill);
                               case 'Mobile Development': return ['React Native', 'Flutter', 'iOS', 'Android'].includes(skill);
                               default: return true;
                             }
                           });
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="w-full mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6">
          <button 
            onClick={() => navigate('home')}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">DevFreela</span>
          </div>
        </div>
      </header>

      <div className="w-full mx-auto max-w-screen-xl px-4 py-8 md:px-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Freelancers</h1>
          <p className="text-muted-foreground">Discover talented professionals for your next project</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for freelancers, skills, or services..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Skill Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={budgetRange} onValueChange={setBudgetRange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Hourly Rate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Budgets">All Rates</SelectItem>
                <SelectItem value="Under $25">Under $25/hr</SelectItem>
                <SelectItem value="$25-$50">$25 - $50/hr</SelectItem>
                <SelectItem value="$50-$100">$50 - $100/hr</SelectItem>
                <SelectItem value="Over $100">Over $100/hr</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="online">Online Now</SelectItem>
                <SelectItem value="available">Available</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredFreelancers.length} freelancer{filteredFreelancers.length !== 1 ? 's' : ''} found
          </p>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="rate-low">Lowest Rate</SelectItem>
              <SelectItem value="rate-high">Highest Rate</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Freelancer Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    {freelancer.online && (
                      <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-card-foreground hover:text-primary cursor-pointer">
                          {freelancer.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{freelancer.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSaveFreelancer(freelancer.id)}
                        >
                          <Heart 
                            className={`h-4 w-4 ${savedFreelancers.includes(freelancer.id) ? 'fill-current text-red-500' : ''}`} 
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                {/* Rating and Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-muted-foreground">({freelancer.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-medium">${freelancer.hourlyRate}/hr</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {freelancer.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {freelancer.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {freelancer.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{freelancer.skills.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Portfolio Preview */}
                {freelancer.portfolio.length > 0 && (
                  <div className="flex gap-2">
                    {freelancer.portfolio.slice(0, 2).map((image, index) => (
                      <ImageWithFallback
                        key={index}
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="h-16 w-24 rounded object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-xs text-center">
                  <div>
                    <p className="font-medium text-card-foreground">{freelancer.completedJobs}</p>
                    <p className="text-muted-foreground">Jobs</p>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{freelancer.successRate}</p>
                    <p className="text-muted-foreground">Success</p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{freelancer.responseTime}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <MessageCircle className="mr-1 h-3 w-3" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Freelancers
          </Button>
        </div>
      </div>
    </div>
  );
}