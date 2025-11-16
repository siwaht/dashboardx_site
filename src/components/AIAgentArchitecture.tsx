import { Brain, Database, HardDrive, Search, Code2, CheckCircle, ArrowRight, Sparkles, Zap, Activity, Loader2 } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';

export default function AIAgentArchitecture() {
  const [activeNode, setActiveNode] = useState<number>(-1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [activeEdges, setActiveEdges] = useState<number[]>([]);
  const [completedEdges, setCompletedEdges] = useState<number[]>([]);
  const [processingNodes, setProcessingNodes] = useState<number[]>([]);
  const [currentStageLabel, setCurrentStageLabel] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTimers = useRef<NodeJS.Timeout[]>([]);
  const isAnimatingRef = useRef(false);

  const stopAnimation = useCallback(() => {
    animationTimers.current.forEach(timer => clearTimeout(timer));
    animationTimers.current = [];
    isAnimatingRef.current = false;
  }, []);

  const resetAnimation = useCallback(() => {
    setActiveNode(-1);
    setCompletedNodes([]);
    setActiveEdges([]);
    setCompletedEdges([]);
    setProcessingNodes([]);
    setCurrentStageLabel('');
  }, []);

  const startAnimation = useCallback(() => {
    stopAnimation();
    resetAnimation();

    animationTimers.current.push(setTimeout(() => {
      setActiveNode(0);
      setCurrentStageLabel('Receiving user input...');
      setProcessingNodes([0]);
    }, 200));

    animationTimers.current.push(setTimeout(() => {
      setCompletedNodes([0]);
      setProcessingNodes([]);
      setActiveEdges([0]);
    }, 700));

    animationTimers.current.push(setTimeout(() => {
      setCompletedEdges([0]);
      setActiveNode(4);
      setCurrentStageLabel('LLM processing query...');
      setProcessingNodes([4]);
    }, 1200));

    animationTimers.current.push(setTimeout(() => {
      setActiveEdges([1]);
      setCurrentStageLabel('Checking short-term memory...');
    }, 1800));

    animationTimers.current.push(setTimeout(() => {
      setCompletedEdges([0, 1]);
      setActiveNode(1);
      setProcessingNodes([1]);
    }, 2100));

    animationTimers.current.push(setTimeout(() => {
      setCompletedNodes([0, 1]);
      setProcessingNodes([4]);
      setActiveNode(4);
      setActiveEdges([2]);
      setCurrentStageLabel('Retrieving from long-term memory...');
    }, 2700));

    animationTimers.current.push(setTimeout(() => {
      setCompletedEdges([0, 1, 2]);
      setActiveNode(2);
      setProcessingNodes([2]);
    }, 3000));

    animationTimers.current.push(setTimeout(() => {
      setCompletedNodes([0, 1, 2]);
      setProcessingNodes([4]);
      setActiveNode(4);
      setActiveEdges([3]);
      setCurrentStageLabel('Performing RAG retrieval...');
    }, 3600));

    animationTimers.current.push(setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3]);
      setActiveNode(3);
      setProcessingNodes([3]);
    }, 3900));

    animationTimers.current.push(setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3]);
      setProcessingNodes([4]);
      setActiveNode(4);
      setCurrentStageLabel('LLM synthesizing response...');
    }, 4500));

    animationTimers.current.push(setTimeout(() => {
      setCompletedNodes([0, 1, 2, 3, 4]);
      setProcessingNodes([]);
      setActiveEdges([4, 5]);
      setCurrentStageLabel('Generating outputs...');
    }, 5400));

    animationTimers.current.push(setTimeout(() => {
      setCompletedEdges([0, 1, 2, 3, 4, 5]);
      setActiveNode(5);
      setProcessingNodes([5]);
    }, 5800));

    animationTimers.current.push(setTimeout(() => {
      setActiveNode(6);
      setProcessingNodes([6]);
      setTimeout(() => {
        setCompletedNodes([0, 1, 2, 3, 4, 5, 6]);
        setProcessingNodes([]);
        setCurrentStageLabel('Response complete!');
      }, 300);
    }, 6200));

    animationTimers.current.push(setTimeout(() => {
      setCurrentStageLabel('');
      setActiveNode(-1);
    }, 7000));
  }, [stopAnimation, resetAnimation]);

  const startAnimationLoop = useCallback(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const loop = () => {
      if (!isAnimatingRef.current) return;
      startAnimation();
      animationTimers.current.push(setTimeout(loop, 7800));
    };

    loop();
  }, [startAnimation]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimatingRef.current) {
            startAnimationLoop();
          } else if (!entry.isIntersecting && isAnimatingRef.current) {
            stopAnimation();
            resetAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [startAnimationLoop, stopAnimation, resetAnimation]);

  const architectureNodes = [
    {
      icon: ArrowRight,
      label: 'Input',
      sublabel: 'User Query',
      x: 12,
      y: 50,
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: HardDrive,
      label: 'Short-Term',
      sublabel: 'Memory Cache',
      x: 35,
      y: 20,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      label: 'Long-Term',
      sublabel: 'Memory Store',
      x: 35,
      y: 80,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Search,
      label: 'RAG',
      sublabel: 'Knowledge Base',
      x: 50,
      y: 12,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Brain,
      label: 'LLM',
      sublabel: 'Core Processing',
      x: 50,
      y: 50,
      color: 'from-violet-500 to-purple-600',
      large: true
    },
    {
      icon: Code2,
      label: 'Structured',
      sublabel: 'JSON Output',
      x: 77,
      y: 32,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Sparkles,
      label: 'Multimodal',
      sublabel: 'Rich Media',
      x: 77,
      y: 68,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const edges = [
    { from: 0, to: 4 },
    { from: 4, to: 1 },
    { from: 4, to: 2 },
    { from: 4, to: 3 },
    { from: 4, to: 5 },
    { from: 4, to: 6 }
  ];

  const getNodeStatus = (index: number) => {
    if (completedNodes.includes(index)) return 'completed';
    if (activeNode === index) return 'active';
    if (processingNodes.includes(index)) return 'processing';
    return 'idle';
  };

  const getEdgeStatus = (index: number) => {
    if (completedEdges.includes(index)) return 'completed';
    if (activeEdges.includes(index)) return 'active';
    return 'idle';
  };

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto mt-8 md:mt-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/50 rounded-xl sm:rounded-2xl shadow-elevation-2 overflow-hidden">
      {currentStageLabel && (
        <div className="px-4 sm:px-6 pt-4 sm:pt-5 md:pt-6">
          <div className="flex items-center justify-center gap-2 text-cyan-400 animate-pulse">
            <Activity className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">{currentStageLabel}</span>
          </div>
        </div>
      )}
      <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px] p-3 sm:p-5 md:p-6 lg:p-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            animation: 'grid-flow 20s linear infinite'
          }}></div>
        </div>
        <div className="relative w-full h-full">

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                <animate attributeName="x1" values="0%;100%;0%" dur="2s" repeatCount="indefinite" />
                <animate attributeName="x2" values="100%;200%;100%" dur="2s" repeatCount="indefinite" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {edges.map((edge, index) => {
              const fromNode = architectureNodes[edge.from];
              const toNode = architectureNodes[edge.to];
              const status = getEdgeStatus(index);

              const fromX = fromNode.x;
              const fromY = fromNode.y;
              const toX = toNode.x;
              const toY = toNode.y;

              const dx = toX - fromX;
              const dy = toY - fromY;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const controlDist = dist * 0.4;

              const pathD = `M ${fromX},${fromY} C ${fromX + controlDist},${fromY} ${toX - controlDist},${toY} ${toX},${toY}`;

              const pathId = `edge-${index}`;
              const strokeColor = status === 'completed' ? '#10b981' : status === 'active' ? '#14b8a6' : '#475569';
              const strokeWidth = status === 'active' ? '0.8' : status === 'completed' ? '0.6' : '0.4';

              return (
                <g key={index}>
                  {status === 'active' && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      opacity="0.3"
                      strokeLinecap="round"
                      filter="url(#glow)"
                    />
                  )}
                  <path
                    id={pathId}
                    d={pathD}
                    fill="none"
                    stroke={status === 'active' ? 'url(#activeGradient)' : strokeColor}
                    strokeWidth={strokeWidth}
                    opacity={status === 'idle' ? '0.4' : '1'}
                    strokeLinecap="round"
                  />
                  {status === 'active' && (
                    <>
                      <circle r="0.7" fill="#06b6d4" opacity="0.9">
                        <animateMotion dur="1.5s" repeatCount="indefinite">
                          <mpath href={`#${pathId}`} />
                        </animateMotion>
                      </circle>
                      <circle r="0.5" fill="#14b8a6" opacity="0.8">
                        <animateMotion dur="1.5s" begin="0.5s" repeatCount="indefinite">
                          <mpath href={`#${pathId}`} />
                        </animateMotion>
                      </circle>
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {architectureNodes.map((node, index) => {
            const status = getNodeStatus(index);
            const isLarge = node.large;

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  zIndex: isLarge ? 20 : 10
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`relative bg-slate-800 rounded-lg transition-all duration-500 flex flex-col items-center justify-center ${
                      isLarge ? 'w-[85px] xs:w-[95px] sm:w-[110px] md:w-[120px]' : 'w-[68px] xs:w-[75px] sm:w-[88px] md:w-[98px]'
                    } ${
                      status === 'active'
                        ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 scale-105 sm:scale-110'
                        : status === 'processing'
                        ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/50'
                        : status === 'completed'
                        ? 'border-2 border-emerald-500 shadow-lg shadow-emerald-500/30'
                        : 'border-2 border-slate-600'
                    }`}
                    style={{
                      padding: isLarge ? '10px 12px' : '7px 9px',
                    }}
                  >
                    {status === 'active' && (
                      <>
                        <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle"></div>
                        <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-particle" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute -bottom-2 -left-1 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float-particle" style={{ animationDelay: '0.6s' }}></div>
                        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-particle" style={{ animationDelay: '0.9s' }}></div>
                      </>
                    )}

                    <div className={`mb-1 sm:mb-1.5 transition-all duration-300 ${
                      status === 'active' || status === 'processing' ? 'text-cyan-400 animate-pulse' : status === 'completed' ? 'text-emerald-400' : 'text-slate-400'
                    }`}>
                      {status === 'processing' ? (
                        <Loader2 className={`${isLarge ? 'w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8' : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'} animate-spin`} strokeWidth={2.5} />
                      ) : (
                        <node.icon className={`${isLarge ? 'w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8' : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'}`} strokeWidth={2.5} />
                      )}
                    </div>

                    <div className={`text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 text-center leading-tight px-1 ${
                      status === 'active' || status === 'processing' ? 'text-cyan-300' : status === 'completed' ? 'text-emerald-300' : 'text-slate-400'
                    }`}>
                      {node.label}
                    </div>

                    <div className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] text-slate-500 whitespace-nowrap text-center leading-tight px-0.5">
                      {node.sublabel}
                    </div>

                    {(status === 'active' || status === 'processing') && (
                      <>
                        <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 animate-ping opacity-75"></div>
                        <div className="absolute -inset-1 rounded-lg border border-cyan-400/30 animate-pulse"></div>
                        <div className="absolute -top-1.5 -right-1.5 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[8px] xs:text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg animate-pulse">
                          <Zap className="w-2.5 h-2.5" />
                        </div>
                      </>
                    )}

                    {status === 'completed' && (
                      <>
                        <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 rounded-full p-0.5 shadow-lg animate-bounce-once">
                          <CheckCircle className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                        </div>
                        <div className="absolute inset-0 rounded-lg border border-emerald-400/20"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translate(var(--float-x, 10px), var(--float-y, -10px)) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(0.9); }
          75% { transform: scale(1.1); }
        }

        .animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
        }

        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
