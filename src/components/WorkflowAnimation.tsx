import { Play, Database, Search, FileText, GitBranch, CheckCircle, Sparkles, Zap, ArrowRight } from 'lucide-react';
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
    setTimeout(() => setActiveNode(0), 300);

    setTimeout(() => {
      setCompletedNodes([0]);
      setActiveEdges([0]);
    }, 1200);

    setTimeout(() => {
      setCompletedEdges([0]);
      setActiveNode(1);
    }, 1800);

    setTimeout(() => {
      setCompletedNodes([0, 1]);
      setActiveEdges([1, 2]);
    }, 2700);

    setTimeout(() => {
      setCompletedEdges([0, 1, 2]);
      setActiveNode(2);
      setTimeout(() => setActiveNode(3), 100);
    }, 3300);

    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3]);
      setActiveEdges([3, 4]);
    }, 4200);

    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4]);
      setActiveNode(4);
    }, 4800);

    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4]);
      setActiveEdges([5]);
    }, 5700);

    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4, 5]);
      setActiveNode(5);
    }, 6300);

    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4, 5]);
      setActiveEdges([6]);
    }, 7200);

    setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4, 5, 6]);
      setActiveNode(6);
    }, 7800);

    setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4, 5, 6]);
      setActiveNode(-1);
    }, 8700);
  };

  const workflowNodes = [
    {
      icon: Play,
      label: 'Start',
      sublabel: 'User Query',
      x: 8,
      y: 50
    },
    {
      icon: GitBranch,
      label: 'Router',
      sublabel: 'Analyze & Route',
      x: 23,
      y: 50
    },
    {
      icon: Database,
      label: 'SQL Agent',
      sublabel: 'Query DB',
      x: 40,
      y: 20
    },
    {
      icon: FileText,
      label: 'Doc Agent',
      sublabel: 'Search Docs',
      x: 40,
      y: 80
    },
    {
      icon: Search,
      label: 'Validator',
      sublabel: 'Cross-Check',
      x: 57,
      y: 50
    },
    {
      icon: Sparkles,
      label: 'Synthesizer',
      sublabel: 'Generate Result',
      x: 74,
      y: 50
    },
    {
      icon: CheckCircle,
      label: 'Output',
      sublabel: 'Return Answer',
      x: 91,
      y: 50
    }
  ];

  const edges = [
    { from: 0, to: 1, fromY: 50, toY: 50 },
    { from: 1, to: 2, fromY: 50, toY: 20 },
    { from: 1, to: 3, fromY: 50, toY: 80 },
    { from: 2, to: 4, fromY: 20, toY: 50 },
    { from: 3, to: 4, fromY: 80, toY: 50 },
    { from: 4, to: 5, fromY: 50, toY: 50 },
    { from: 5, to: 6, fromY: 50, toY: 50 }
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

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto mt-8 md:mt-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl shadow-elevation-2 overflow-hidden">
      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] p-4 sm:p-6 md:p-8">
        <div className="relative w-full h-full" style={{ transform: 'scale(1)', transformOrigin: 'center center' }}>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
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
                const dy = toY - fromY;
                const controlDist = Math.abs(dx) * 0.6;

                pathD = `M ${fromX},${fromY} C ${fromX + controlDist},${fromY} ${toX - controlDist},${toY} ${toX},${toY}`;
              } else {
                pathD = `M ${fromX},${fromY} L ${toX},${toY}`;
              }

              const pathId = `edge-${index}`;
              const strokeColor = status === 'completed' ? '#10b981' : status === 'active' ? '#14b8a6' : '#475569';

              return (
                <g key={index}>
                  <path
                    id={pathId}
                    d={pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={status === 'idle' ? '0.3' : '0.5'}
                    opacity={status === 'idle' ? '0.3' : '0.9'}
                    strokeLinecap="round"
                  />
                  {status === 'active' && (
                    <circle r="0.6" fill="#14b8a6">
                      <animateMotion dur="1.2s" repeatCount="indefinite">
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {workflowNodes.map((node, index) => {
            const status = getNodeStatus(index);
            const isVisible = activeNode >= index || completedNodes.includes(index);

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
                    className={`relative bg-slate-800 rounded-lg transition-all duration-300 flex flex-col items-center justify-center min-w-[90px] ${
                      status === 'active'
                        ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/50'
                        : status === 'completed'
                        ? 'border-2 border-emerald-500 shadow-lg shadow-emerald-500/30'
                        : 'border-2 border-slate-600'
                    }`}
                    style={{
                      padding: '12px 16px'
                    }}
                  >
                    <div className={`mb-1.5 ${
                      status === 'active' ? 'text-cyan-400' : status === 'completed' ? 'text-emerald-400' : 'text-slate-400'
                    }`}>
                      <node.icon className="w-6 h-6" strokeWidth={2.5} />
                    </div>

                    <div className={`text-xs font-bold mb-0.5 ${
                      status === 'active' ? 'text-cyan-300' : status === 'completed' ? 'text-emerald-300' : 'text-slate-400'
                    }`}>
                      {node.label}
                    </div>

                    <div className="text-[10px] text-slate-500 whitespace-nowrap">
                      {node.sublabel}
                    </div>

                    {status === 'active' && (
                      <>
                        <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 animate-ping opacity-75"></div>
                        <div className="absolute -top-1.5 -right-1.5 flex items-center gap-1 bg-cyan-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                          <Zap className="w-2.5 h-2.5" />
                        </div>
                      </>
                    )}

                    {status === 'completed' && (
                      <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 rounded-full p-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />
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
        .edge-active {
          filter: drop-shadow(0 0 6px rgba(20, 184, 166, 0.8));
        }

        .edge-completed {
          filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.6));
        }

        .flow-particle {
          filter: drop-shadow(0 0 6px rgba(20, 184, 166, 1));
        }
      `}</style>
    </div>
  );
}
