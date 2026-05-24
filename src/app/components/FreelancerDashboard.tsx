import { useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { 
  Home, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  DollarSign, 
  User, 
  BarChart3, 
  Clock, 
  Star,
  TrendingUp,
  Calendar,
  Eye
} from 'lucide-react';

const sidebarItems = [
  { title: "Dashboard", icon: Home, id: "overview" },
  { title: "Active Projects", icon: Briefcase, id: "projects" },
  { title: "Proposals", icon: FileText, id: "proposals" },
  { title: "Messages", icon: MessageSquare, id: "messages", badge: "5" },
  { title: "Earnings", icon: DollarSign, id: "earnings" },
  { title: "Profile", icon: User, id: "profile" },
];

const mockData = {
  stats: {
    totalEarnings: 24580,
    monthlyEarnings: 3420,
    activeProjects: 4,
    completedJobs: 127,
    clientRating: 4.9,
    profileViews: 142,
    responseTime: "2 hours",
    successRate: "98%"
  },
  activeProjects: [
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "TechCorp Solutions",
      budget: 5000,
      progress: 75,
      deadline: "2024-02-15",
      status: "In Progress",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      client: "StartupX",
      budget: 3200,
      progress: 45,
      deadline: "2024-02-20",
      status: "In Progress",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Data Analysis Dashboard",
      client: "Analytics Pro",
      budget: 2800,
      progress: 20,
      deadline: "2024-02-28",
      status: "Starting Soon",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    }
  ],
  recentProposals: [
    {
      id: 1,
      title: "React Development for SaaS Platform",
      submittedAt: "2 days ago",
      status: "Under Review",
      budget: 4500,
      competition: 12
    },
    {
      id: 2,
      title: "WordPress Website Redesign",
      submittedAt: "1 week ago",
      status: "Rejected",
      budget: 2000,
      competition: 23
    },
    {
      id: 3,
      title: "API Integration Project",
      submittedAt: "3 days ago",
      status: "Interview Scheduled",
      budget: 3500,
      competition: 8
    }
  ],
  messages: [
    {
      id: 1,
      from: "John Smith",
      subject: "Project Update Required",
      preview: "Hi Sarah, could you please provide an update on the current progress...",
      time: "2 hours ago",
      unread: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      from: "Emily Davis",
      subject: "New Project Opportunity",
      preview: "I have an exciting new project that might be perfect for your skills...",
      time: "1 day ago",
      unread: true,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      from: "Michael Brown",
      subject: "Payment Processed",
      preview: "Your payment for the recent project has been processed successfully...",
      time: "2 days ago",
      unread: false,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    }
  ],
  earnings: {
    thisMonth: 3420,
    lastMonth: 2890,
    thisYear: 24580,
    pendingPayments: 1250,
    recentPayments: [
      { project: "E-commerce Development", amount: 1500, date: "Jan 28, 2024", status: "Completed" },
      { project: "Logo Design", amount: 350, date: "Jan 25, 2024", status: "Completed" },
      { project: "Website Maintenance", amount: 200, date: "Jan 22, 2024", status: "Completed" }
    ]
  }
};

export function FreelancerDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewContent />;
      case "projects":
        return <ProjectsContent />;
      case "proposals":
        return <ProposalsContent />;
      case "messages":
        return <MessagesContent />;
      case "earnings":
        return <EarningsContent />;
      case "profile":
        return <ProfileContent />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        
        <div className="flex">
          <Sidebar className="border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sidebarItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton 
                          onClick={() => setActiveSection(item.id)}
                          isActive={activeSection === item.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function OverviewContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your freelancing overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.stats.totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +${mockData.stats.monthlyEarnings} this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              {mockData.stats.completedJobs} completed total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Client Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.clientRating}</div>
            <p className="text-xs text-muted-foreground">
              From {mockData.stats.completedJobs} reviews
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.profileViews}</div>
            <p className="text-xs text-muted-foreground">
              +23% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.activeProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={project.avatar} />
                  <AvatarFallback>{project.client.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">${project.budget.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{project.progress}% complete</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.messages.slice(0, 3).map((message) => (
              <div key={message.id} className="flex items-start space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{message.from}</p>
                    <p className="text-xs text-muted-foreground">{message.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {message.preview}
                  </p>
                </div>
                {message.unread && (
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Active Projects</h1>
          <p className="text-muted-foreground">Manage your ongoing work</p>
        </div>
        <Button>View All Projects</Button>
      </div>

      <div className="space-y-4">
        {mockData.activeProjects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={project.avatar} />
                      <AvatarFallback>{project.client.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>${project.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.deadline}</span>
                      </div>
                    </div>
                    <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProposalsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Proposals</h1>
        <p className="text-muted-foreground">Track your submitted proposals</p>
      </div>

      <div className="space-y-4">
        {mockData.recentProposals.map((proposal) => (
          <Card key={proposal.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold">{proposal.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Submitted {proposal.submittedAt}</span>
                    <span>Budget: ${proposal.budget.toLocaleString()}</span>
                    <span>{proposal.competition} other proposals</span>
                  </div>
                </div>
                <Badge 
                  variant={
                    proposal.status === 'Under Review' ? 'default' :
                    proposal.status === 'Interview Scheduled' ? 'secondary' :
                    'destructive'
                  }
                >
                  {proposal.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MessagesContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Communicate with your clients</p>
      </div>

      <div className="space-y-4">
        {mockData.messages.map((message) => (
          <Card key={message.id} className={message.unread ? 'bg-muted/50' : ''}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{message.from}</h3>
                    <span className="text-sm text-muted-foreground">{message.time}</span>
                  </div>
                  <h4 className="text-sm font-medium">{message.subject}</h4>
                  <p className="text-sm text-muted-foreground">{message.preview}</p>
                </div>
                {message.unread && (
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function EarningsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Earnings</h1>
        <p className="text-muted-foreground">Track your income and payments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.earnings.thisMonth.toLocaleString()}</div>
            <p className="text-sm text-green-600">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>This Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.earnings.thisYear.toLocaleString()}</div>
            <p className="text-sm text-green-600">+24% from last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.earnings.pendingPayments.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.earnings.recentPayments.map((payment, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{payment.project}</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${payment.amount}</p>
                  <Badge variant="outline">{payment.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your freelancer profile</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Update your profile information to attract more clients and showcase your skills effectively.
            </p>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Profile Completion</span>
                <span className="text-sm">85%</span>
              </div>
              <Progress value={85} />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Response Time</span>
                <span>{mockData.stats.responseTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Success Rate</span>
                <span>{mockData.stats.successRate}</span>
              </div>
              <div className="flex justify-between">
                <span>Client Rating</span>
                <span>{mockData.stats.clientRating}/5.0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}