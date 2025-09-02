import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Wrench, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Notification Banner */}
      <div className="notification-banner text-center py-3 px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>Click here to support our Product Hunt launch →</span>
          <button className="ml-2 text-white/80 hover:text-white">✕</button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded">
                <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">X</div>
              </div>
              <span className="text-xl font-semibold">xpander.ai</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-purple-400">Documentation</a>
              <a href="#" className="hover:text-purple-400">Pricing</a>
              <a href="#" className="hover:text-purple-400">Blog</a>
              <a href="#" className="hover:text-purple-400">Careers</a>
              <a href="#" className="hover:text-purple-400">Agent Templates</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
              Schedule a Demo
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Console Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            REAL AGENTS IN PRODUCTION
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Memory, Tools, MCP, storage, Slack integration – the ultimate agent toolbox.
            All wrapped in a production-ready backend for your agents.
          </p>
          
          {/* Installation Command */}
          <div className="terminal-window max-w-2xl mx-auto mb-12">
            <div className="terminal-header">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
            </div>
            <div className="p-4 text-left">
              <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                <span className="text-gray-500">$</span>
                <span>npm install -g xpander-cli</span>
                <Copy className="w-4 h-4 ml-auto cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
          
          <Button variant="link" className="text-purple-400 hover:text-purple-300 mb-16">
            Documentation <ExternalLink className="w-4 h-4 ml-1" />
          </Button>

          {/* Code Editor Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="code-editor p-1">
              <div className="bg-[#161b22] rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 p-3 border-b border-gray-700 text-xs">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 ml-4">agent.py</span>
                </div>
                <div className="p-6 text-left font-mono text-sm space-y-2">
                  <div className="text-purple-400">from xpander import Agent</div>
                  <div className="text-gray-500"># Initialize agent with memory</div>
                  <div><span className="text-blue-400">agent</span> = <span className="text-yellow-400">Agent</span>(<span className="text-green-400">"my-agent"</span>)</div>
                  <div className="text-gray-500"># Add tools and deploy</div>
                  <div className="text-blue-400">agent</div><span className="text-white">.</span><span className="text-yellow-400">add_tool</span>(<span className="text-green-400">"web_search"</span>)</div>
                  <div className="text-blue-400">agent</div><span className="text-white">.</span><span className="text-yellow-400">deploy</span>()</div>
                </div>
              </div>
            </div>
            
            {/* Floating windows */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="terminal-window w-64 bg-gray-900 border border-gray-700 rounded-lg p-4">
                <div className="text-xs font-mono space-y-1">
                  <div className="text-green-400">✓ Memory initialized</div>
                  <div className="text-green-400">✓ Tools loaded</div>
                  <div className="text-green-400">✓ Agent deployed</div>
                  <div className="text-yellow-400">→ Running in production</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 top-1/4 hidden lg:block">
              <div className="terminal-window w-48 bg-gray-900 border border-gray-700 rounded-lg p-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-green-400">12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory:</span>
                    <span className="text-blue-400">256MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Requests:</span>
                    <span className="text-yellow-400">1.2k/min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-900/30 text-purple-400 border-purple-700 mb-4">
              INVISIBLE AGENT INFRASTRUCTURE
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              VERSION, TEST & DEPLOY AGENTS<br />
              WITHOUT MANAGING INFRASTRUCTURE
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Building autonomous agents requires fast iterations.<br />
              You need the platform that increases your development speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Build, Deploy, Test, and release a new Agent Version in under an hour</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Use your preferred AI framework – we provide the missing MCP tools and run in your VPC with pre-configured environments. Your development lifecycle is now 90% faster.
              </p>
            </Card>

            <Card className="bg-purple-900/20 border-purple-800 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Focus on your business logic while we do the infrastructure around it</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Agents live where your users are – with natural authentication, organization management, and deep integration into communication channels like Slack or Teams. We handle the complexity so you don't have to.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Lifecycle Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-900/30 text-blue-400 border-blue-700 mb-4">
              SPEEDUP THE AGENT DEVELOPMENT LIFECYCLE
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              PAVED PATH TO PRODUCTION
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Start from a production-grade blueprint of your favorite agent framework. Add tools, memory, MCPs, orchestrate complex multi-agent systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="code-editor">
                <div className="bg-[#0d1117] rounded-lg p-1">
                  <div className="bg-[#161b22] rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 p-3 border-b border-gray-700 text-xs">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-gray-400 ml-4">python</span>
                    </div>
                    <div className="p-6 text-left font-mono text-sm space-y-1">
                      <div><span className="text-gray-500">>>> </span><span className="text-blue-400">xpander_sdk import</span> <span className="text-yellow-400">Agent</span>, <span className="text-yellow-400">Task</span>, <span className="text-yellow-400">State</span>, <span className="text-yellow-400">memory</span></div>
                      <div><span className="text-gray-500">>>> </span><span className="text-blue-400">agent</span>.<span className="text-yellow-400">Agent</span> <span className="text-yellow-400">import</span> <span className="text-green-400">Agent</span></div>
                      <div className="text-gray-500"># Load your agent</div>
                      <div><span className="text-blue-400">agent</span> = <span className="text-yellow-400">Agent</span>(<span className="text-green-400">"local.Task: Backlog, on_task</span>)</div>
                      <div className="text-gray-500"># Sartful agent, save infrastructure overhead</div>
                      <div><span className="text-blue-400">hot_task</span></div>
                      <div><span className="text-blue-400">backend</span> = <span className="text-yellow-400">system_prompt</span></div>
                      <div><span className="text-blue-400">backend</span>(<span className="text-green-400">"taskStatus"</span>, <span className="text-green-400">result</span>)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Unified event streaming</h3>
              <p className="text-gray-400 mb-6">
                One AI-Ready event from any source: Slack, Web UI, Webhooks, or your own application via SDK. Your agent gets prompts while the platform handles all the heavy-lifting.
              </p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Slack</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Web UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>API</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                  See docs <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;