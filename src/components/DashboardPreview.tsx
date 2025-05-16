
import React from 'react';
import { BarChart, PieChart, Users, ThumbsUp, TrendingUp, BarChart2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPreview = () => {
  return (
    <section className="bolt-section">
      <div className="bolt-container">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Powerful Analytics Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in-depth insights into your audience's preferences and engagement patterns
          </p>
        </div>
        
        <div className="relative mt-16 fade-in" style={{ animationDelay: "200ms" }}>
          <div className="bolt-card bg-white shadow-lg">
            <div className="bg-black text-white p-4 flex items-center">
              <div className="flex-1 flex items-center gap-3">
                <Users size={20} />
                <span className="font-medium">Audience Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Cards */}
                <Card className="border-gray-100 shadow-sm scale-up-hover rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Total Votes</p>
                        <h3 className="text-2xl font-bold">5,428</h3>
                      </div>
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-black">
                        <ThumbsUp size={20} />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+24% from last week</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-100 shadow-sm scale-up-hover rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Active Polls</p>
                        <h3 className="text-2xl font-bold">32</h3>
                      </div>
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-black">
                        <BarChart size={20} />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+12% from last month</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-100 shadow-sm scale-up-hover rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Avg. Engagement</p>
                        <h3 className="text-2xl font-bold">68%</h3>
                      </div>
                      <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-black">
                        <Users size={20} />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+7% from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-100 shadow-sm rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Vote Distribution</h4>
                      <div className="text-sm text-gray-500">Last 7 days</div>
                    </div>
                    <div className="h-60 relative">
                      {/* Mockup Bar Chart */}
                      <div className="absolute inset-0 flex items-end space-x-4 px-2">
                        {[65, 40, 85, 50, 75, 30, 60].map((height, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center">
                            <div 
                              className="w-full bg-black rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                            <span className="text-xs mt-1 text-gray-500">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-100 shadow-sm rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Audience Preferences</h4>
                      <div className="text-sm text-gray-500">By Category</div>
                    </div>
                    <div className="h-60 relative flex items-center justify-center">
                      {/* Mockup Pie Chart */}
                      <div className="w-44 h-44 rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}></div>
                        <div className="absolute inset-0 bg-gray-800" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%, 0 50%)' }}></div>
                        <div className="absolute inset-0 bg-gray-600" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)' }}></div>
                        <div className="absolute inset-0 bg-gray-400" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0)' }}></div>
                        <div className="absolute inset-0 w-32 h-32 bg-white rounded-full m-auto"></div>
                      </div>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-2">
                        {['Fashion', 'Tech', 'Travel', 'Food'].map((category, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: ['#000', '#333', '#555', '#777'][index] }}></div>
                            <span>{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
