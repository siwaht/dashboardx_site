import { Brain, Database, MessageSquare, FileText, Image as ImageIcon, Mic, Video, CheckCircle, Sparkles, Zap, Layers, BookOpen } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function WorkflowAnimation() {
  const [activeNode, setActiveNode] = useState<number>(-1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [activeEdges, setActiveEdges] = useState<number[]>([]);
  const [completedEdges, setCompletedEdges] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    // Input arrives
    setTimeout(() => setActiveNode(0), 300);

    // Input processed, multiple sources activated
    setTimeout(() => {
      setCompletedNodes([0]);
      setActiveEdges([0, 1, 2, 3]);
    }, 1200);

    // Multimodal inputs and RAG activate
    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3]);
      setActiveNode(1);
      setTimeout(() => setActiveNode(2), 100);
      setTimeout(() => setActiveNode(3), 200);
      setTimeout(() => setActiveNode(4), 300);
    }, 1800);

    // All sources complete, memory and context activate
    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4]);
      setActiveEdges([4, 5, 6, 7]);
    }, 3000);

    // Memory and context complete
    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4, 5, 6, 7]);
      setActiveNode(5);
      setTimeout(() => setActiveNode(6), 100);
    }, 3600);

    // Data flows to LLM
    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4, 5, 6]);
      setActiveEdges([8, 9]);
    }, 4500);

    // LLM processing
    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      setActiveNode(7);
    }, 5100);

    // LLM to output
    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4, 5, 6, 7]);
      setActiveEdges([10]);
    }, 6300);

    // Output complete
    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      setActiveNode(8);
    }, 6900);

    // Animation complete
    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      setActiveNode(-1);
    }, 7800);
  };

  const workflowNodes = [
    {
      icon: MessageSquare,
      label: 'User Input',
      sublabel: 'Query Received',
      x: 10,
      y: 50,
      color: 'blue'
    },
    {
      icon: FileText,
      label: 'Text Input',
      sublabel: 'Documents',
      x: 28,
      y: 15,
      color: 'cyan'
    },
    {
      icon: ImageIcon,
      label: 'Image Input',
      sublabel: 'Vision Data',
      x: 28,
      y: 40,
      color: 'purple'
    },
    {
      icon: Mic,
      label: 'Voice Input',
      sublabel: 'Audio Data',
      x: 28,
      y: 65,
      color: 'pink'
    },
    {
      icon: Database,
      label: 'RAG Retrieval',
      sublabel: 'Knowledge Base',
      x: 28,
      y: 90,
      color: 'emerald'
    },
    {
      icon: Layers,
      label: 'Memory',
      sublabel: 'Context Store',
      x: 47,
      y: 30,
      color: 'orange'
    },
    {
      icon: BookOpen,
      label: 'Context',
      sublabel: 'History & State',
      x: 47,
      y: 70,
      color: 'amber'
    },
    {
      icon: Brain,
      label: 'LLM Core',
      sublabel: 'AI Processing',
      x: 68,
      y: 50,
      color: 'violet'
    },
    {
      icon: CheckCircle,
      label: 'Response',
      sublabel: 'Output Generated',
      x: 90,
      y: 50,
      color: 'emerald'
    }
  ];

  const edges = [
    // Input to multimodal sources
    { from: 0, to: 1, fromY: 50, toY: 15 },   // 0
    { from: 0, to: 2, fromY: 50, toY: 40 },   // 1
    { from: 0, to: 3, fromY: 50, toY: 65 },   // 2
    { from: 0, to: 4, fromY: 50, toY: 90 },   // 3

    // Multimodal to memory/context
    { from: 1, to: 5, fromY: 15, toY: 30 },   // 4
    { from: 2, to: 5, fromY: 40, toY: 30 },   // 5
    { from: 3, to: 6, fromY: 65, toY: 70 },   // 6
    { from: 4, to: 6, fromY: 90, toY: 70 },   // 7

    // Memory/context to LLM
    { from: 5, to: 7, fromY: 30, toY: 50 },   // 8
    { from: 6, to: 7, fromY: 70, toY: 50 },   // 9

    // LLM to output
    { from: 7, to: 8, fromY: 50, toY: 50 }    // 10
  ];

  const getNodeStatus = (index: number) => {
    if (completedNodes.includes(index)) return 'completed';
    if (activeNode === index) return 'active';
    return 'idle';
  };

  const getEdgeStatus = (index: number) => {
    if (completedEdges.includes(index)) return 'completed';
    if (activeEdges.includes(index)) return 'active';
    return 'idle';
  };

  const getNodeColorClasses = (color: string, status: string) => {
    const colors: Record<string, { border: string; shadow: string; icon: string; text: string }> = {
      blue: {
        border: 'border-brand-blue-mid',
        shadow: 'shadow-brand-blue-mid/50',
        icon: 'text-brand-blue-mid',
        text: 'text-brand-blue-mid'
      },
      cyan: {
        border: 'border-brand-teal-mid',
        shadow: 'shadow-brand-teal-mid/50',
        icon: 'text-brand-teal-mid',
        text: 'text-brand-teal-mid'
      },
      purple: {
        border: 'border-purple-500',
        shadow: 'shadow-purple-500/50',
        icon: 'text-purple-400',
        text: 'text-purple-400'
      },
      pink: {
        border: 'border-pink-500',
        shadow: 'shadow-pink-500/50',
        icon: 'text-pink-400',
        text: 'text-pink-400'
      },
      emerald: {
        border: 'border-brand-emerald-mid',
        shadow: 'shadow-brand-emerald-mid/50',
        icon: 'text-brand-emerald-mid',
        text: 'text-brand-emerald-mid'
      },
      orange: {
        border: 'border-orange-500',
        shadow: 'shadow-orange-500/50',
        icon: 'text-orange-400',
        text: 'text-orange-400'
      },
      amber: {
        border: 'border-brand-amber-mid',
        shadow: 'shadow-brand-amber-mid/50',
        icon: 'text-brand-amber-mid',
        text: 'text-brand-amber-mid'
      },
      violet: {
        border: 'border-violet-500',
        shadow: 'shadow-violet-500/50',
        icon: 'text-violet-400',
        text: 'text-violet-400'
      }
    };

    if (status === 'completed') {
      return {
        border: 'border-brand-emerald-mid',
        shadow: 'shadow-lg shadow-brand-emerald-mid/30',
        icon: 'text-brand-emerald-mid',
        text: 'text-brand-emerald-mid'
      };
    }

    if (status === 'active') {
      return {
        border: colors[color].border,
        shadow: `shadow-lg ${colors[color].shadow}`,
        icon: colors[color].icon,
        text: colors[color].text
      };
    }

    return {
      border: 'border-slate-600',
      shadow: '',
      icon: 'text-slate-400',
      text: 'text-slate-400'
    };
  };

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto mt-8 md:mt-12 bg-gradient-to-br from-light-primary/95 to-light-secondary/95 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-brand-slate-light/30 dark:border-slate-700/50 rounded-2xl shadow-elevation-3 overflow-hidden backdrop-blur-sm">
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] p-4 sm:p-6 md:p-8">
        <div className="relative w-full h-full">

          {/* SVG Edges */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="gradient-active" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            {edges.map((edge, index) => {
              const fromNode = workflowNodes[edge.from];
              const toNode = workflowNodes[edge.to];
              const status = getEdgeStatus(index);

              const fromX = fromNode.x + 4.5;
              const fromY = edge.fromY;
              const toX = toNode.x - 4.5;
              const toY = edge.toY;

              const isCurved = Math.abs(fromY - toY) > 10;

              let pathD;
              if (isCurved) {
                const dx = toX - fromX;
                const controlDist = Math.abs(dx) * 0.6;
                pathD = `M ${fromX},${fromY} C ${fromX + controlDist},${fromY} ${toX - controlDist},${toY} ${toX},${toY}`;
              } else {
                pathD = `M ${fromX},${fromY} L ${toX},${toY}`;
              }

              const pathId = `edge-${index}`;
              const strokeColor = status === 'completed' ? '#10b981' : status === 'active' ? '#14b8a6' : '#94a3b8';

              return (
                <g key={index}>
                  <path
                    id={pathId}
                    d={pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={status === 'idle' ? '0.3' : '0.6'}
                    opacity={status === 'idle' ? '0.3' : '0.9'}
                    strokeLinecap="round"
                  />
                  {status === 'active' && (
                    <circle r="0.8" fill="#14b8a6" className="flow-particle">
                      <animateMotion dur="1.2s" repeatCount="indefinite">
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {workflowNodes.map((node, index) => {
            const status = getNodeStatus(index);
            const isVisible = activeNode >= index || completedNodes.includes(index);
            const colorClasses = getNodeColorClasses(node.color, status);

            return (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-20'
                }`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  zIndex: 10
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`relative bg-light-primary/90 dark:bg-slate-800 rounded-xl transition-all duration-300 flex flex-col items-center justify-center min-w-[85px] border-2 ${colorClasses.border} ${colorClasses.shadow}`}
                    style={{
                      padding: '10px 14px'
                    }}
                  >
                    <div className={`mb-1.5 ${colorClasses.icon}`}>
                      <node.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                    </div>

                    <div className={`text-[10px] sm:text-xs font-bold mb-0.5 ${colorClasses.text}`}>
                      {node.label}
                    </div>

                    <div className="text-[9px] text-text-light-secondary dark:text-slate-500 whitespace-nowrap">
                      {node.sublabel}
                    </div>

                    {status === 'active' && (
                      <>
                        <div className={`absolute inset-0 rounded-xl border-2 ${colorClasses.border} animate-ping opacity-75`}></div>
                        <div className={`absolute -top-1.5 -right-1.5 flex items-center gap-1 ${colorClasses.border} ${colorClasses.icon} bg-light-primary dark:bg-slate-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full border`}>
                          <Zap className="w-2.5 h-2.5" />
                        </div>
                      </>
                    )}

                    {status === 'completed' && (
                      <div className="absolute -top-1.5 -right-1.5 bg-brand-emerald-mid rounded-full p-0.5">
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .flow-particle {
          filter: drop-shadow(0 0 8px rgba(20, 184, 166, 1));
        }
      `}</style>
    </div>
  );
}
