import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const goHome = () => {
    window.location.href = "/"
  }

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: "linear-gradient(135deg, oklch(0.75 0.15 280), oklch(0.65 0.2 330))",
            transform: mounted ? `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` : "none",
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: "linear-gradient(135deg, oklch(0.65 0.2 330), oklch(0.75 0.15 280))",
            animationDelay: "1s",
            transform: mounted ? `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` : "none",
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.5 0.1 280) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.5 0.1 280) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Glitchy 404 text */}
        <div className="relative mb-8">
          <h1
            className="text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter select-none"
            style={{
              background: "linear-gradient(135deg, oklch(0.75 0.15 280), oklch(0.65 0.2 330), oklch(0.98 0 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 80px oklch(0.75 0.15 280 / 0.3)",
              transform: mounted ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` : "none",
              transition: "transform 0.1s ease-out",
            }}
          >
            404
          </h1>

          {/* Glitch layers */}
          <h1
            className="absolute inset-0 text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter select-none opacity-30 animate-glitch-1"
            style={{
              color: "oklch(0.65 0.2 330)",
              clipPath: "inset(40% 0 40% 0)",
            }}
          >
            404
          </h1>
          <h1
            className="absolute inset-0 text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter select-none opacity-30 animate-glitch-2"
            style={{
              color: "oklch(0.75 0.15 280)",
              clipPath: "inset(60% 0 20% 0)",
            }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <div
          className="mb-12 space-y-4"
          style={{
            transform: mounted ? `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` : "none",
            transition: "transform 0.2s ease-out",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Oops! Sahifa topilmadi</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            Siz qidirayotgan sahifa o'chirilgan, nomi o'zgartirilgan yoki vaqtincha mavjud emas.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={goHome}
            className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.75_0.15_280/0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              Bosh sahifaga
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={goBack}
            className="group border-border hover:border-primary/50 hover:bg-secondary px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Orqaga qaytish
          </Button>
        </div>

        {/* Search suggestion */}
        <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground">
          <Search className="w-4 h-4" />
          <span className="text-sm">Yoki qidiruv orqali toping</span>
        </div>
      </div>

      {/* Animated corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <defs>
            <linearGradient id="cornerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.75 0.15 280)" />
              <stop offset="100%" stopColor="oklch(0.65 0.2 330)" />
            </linearGradient>
          </defs>
          <path d="M 0 100 Q 100 100 100 0" fill="none" stroke="url(#cornerGrad1)" strokeWidth="2" />
          <path d="M 0 60 Q 60 60 60 0" fill="none" stroke="url(#cornerGrad1)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow-reverse">
          <defs>
            <linearGradient id="cornerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.65 0.2 330)" />
              <stop offset="100%" stopColor="oklch(0.75 0.15 280)" />
            </linearGradient>
          </defs>
          <path d="M 0 100 Q 100 100 100 0" fill="none" stroke="url(#cornerGrad2)" strokeWidth="2" />
          <path d="M 0 60 Q 60 60 60 0" fill="none" stroke="url(#cornerGrad2)" strokeWidth="1" />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }

        @keyframes glitch-1 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(3px, -3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(3px, 3px);
          }
        }

        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(-3px, 3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(-3px, -3px);
          }
        }

        .animate-glitch-1 {
          animation: glitch-1 3s infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
          animation-delay: 0.1s;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin 25s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
