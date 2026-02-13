import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Smartphone, Watch, Headphones, Laptop, ShoppingBag, ShieldCheck, Zap } from "lucide-react"

import { FadeIn } from "@/components/fade-in"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 text-center md:py-32 overflow-hidden bg-zinc-950">
        {/* Apple-style background effect */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
            <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />
        </div>

        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-8 rounded-full px-6 py-2 text-sm font-medium uppercase tracking-widest border-white/10 bg-white/10 text-white backdrop-blur-md">
            Verified • Authentic • Premium
          </Badge>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500 drop-shadow-sm">
            Gadgets You Can Trust.
          </h1>
          <p className="max-w-[700px] text-zinc-400 mt-8 text-xl md:text-2xl font-light leading-relaxed">
            Your premier destination for buying quality pre-owned and brand-new electronics. 
            <span className="text-white block mt-2">Curated by experts. Delivered to you.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full justify-center">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-white text-black hover:bg-zinc-200 transition-all font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Browse Store <ShoppingBag className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-zinc-700 text-white hover:bg-zinc-800 hover:text-white backdrop-blur-sm bg-black/30">
              Sell Your Device <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Hero Image Placeholder - mimicking Apple's large product showcase */}
        <div className="mt-20 relative w-full h-[400px] md:h-[600px] max-w-6xl mx-auto">
           {/* Abstract Phone Shape / Reflection */}
           <div className="absolute inset-x-4 top-0 bottom-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden md:mx-auto md:w-[80%] lg:w-[70%] ring-1 ring-white/10">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               {/* Reflection line */}
               <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 blur-2xl" />
               
               <div className="flex items-center justify-center h-full text-zinc-500 flex-col gap-4">
                  <Smartphone className="w-32 h-32 md:w-48 md:h-48 text-zinc-700 drop-shadow-2xl" strokeWidth={0.5} />
                  <p className="text-sm uppercase tracking-widest opacity-50">Latest Model Backdrop</p>
               </div>
           </div>
        </div>
      </section>

      {/* Trust/Service Section - Center Focused */}
      <section className="py-24 bg-white dark:bg-zinc-950 text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900 dark:text-white">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
            <p className="max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed">
              We make buying and selling gadgets safe, easy, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
             <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Authenticity Guaranteed</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                   Every item is manually inspected and verified by our expert team before listing.
                </p>
             </div>
             
             <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Best Market Rates</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                   We offer competitive pricing whether you are buying a new daily driver or a gift.
                </p>
             </div>

             <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Quality Assured</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                   Only items in excellent or new condition make it to our storefront.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Fresh Arrivals</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900 dark:text-white">Latest from Our Stock</h2>
              <p className="max-w-[700px] text-zinc-500 dark:text-zinc-400 mt-4 md:text-xl/relaxed mx-auto">
                Hand-picked gadgets available for immediate purchase.
              </p>
            </div>
          </FadeIn>

          {/* Centered Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Product Card 1 */}
             <FadeIn delay={0.1}>
               <Card className="group overflow-hidden border-none shadow-lg bg-white dark:bg-zinc-900 rounded-3xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                     <div className="h-64 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative p-6 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700/50 transition-colors">
                        <Laptop className="h-32 w-32 text-zinc-400 dark:text-zinc-600 group-hover:scale-110 transition-transform duration-500" />
                        <Badge className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black">In Stock</Badge>
                     </div>
                     <div className="p-8 text-center space-y-2">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">MacBook Pro M3</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Pristine Condition • 512GB SSD</p>
                        <div className="pt-4 pb-2">
                          <span className="text-2xl font-bold text-primary">$1,299</span>
                        </div>
                        <Button className="w-full rounded-full" variant="secondary">View Details</Button>
                     </div>
                  </CardContent>
               </Card>
             </FadeIn>

             {/* Product Card 2 - Featured */}
             <FadeIn delay={0.2} className="md:col-span-1 lg:col-span-1">
               <Card className="group overflow-hidden border-none shadow-xl bg-primary/5 dark:bg-zinc-900 ring-1 ring-primary/20 rounded-3xl hover:shadow-2xl transition-all duration-300 relative lg:-mt-4 lg:mb-4 h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-b-lg z-10">BEST VALUE</div>
                  <CardContent className="p-0">
                     <div className="h-72 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center relative p-6">
                        <Smartphone className="h-40 w-40 text-primary/80 group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <div className="p-8 text-center space-y-2">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">iPhone 15 Pro Max</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Blue Titanium • Unlocked</p>
                        <div className="pt-4 pb-2">
                           <span className="text-3xl font-bold text-primary">$999</span>
                        </div>
                        <Button className="w-full rounded-full" size="lg">Buy Now</Button>
                     </div>
                  </CardContent>
               </Card>
             </FadeIn>

             {/* Product Card 3 */}
             <FadeIn delay={0.3}>
               <Card className="group overflow-hidden border-none shadow-lg bg-white dark:bg-zinc-900 rounded-3xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                     <div className="h-64 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative p-6 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700/50 transition-colors">
                        <Headphones className="h-32 w-32 text-zinc-400 dark:text-zinc-600 group-hover:scale-110 transition-transform duration-500" />
                         <Badge className="absolute top-4 right-4 bg-zinc-500">Sold Out</Badge>
                     </div>
                     <div className="p-8 text-center space-y-2">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Sony WH-1000XM5</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Noise Cancelling • Black</p>
                        <div className="pt-4 pb-2">
                           <span className="text-2xl font-bold text-zinc-400 line-through">$349</span>
                        </div>
                        <Button className="w-full rounded-full" variant="outline" disabled>Notify Me</Button>
                     </div>
                  </CardContent>
               </Card>
             </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
               <Button variant="ghost" className="text-lg gap-2 group">View All Products <ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dark Product Showcase */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative flex flex-col items-center justify-center min-h-[80vh]">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-zinc-950 to-zinc-950" />
        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto w-full">
              <FadeIn>
                <Badge variant="outline" className="border-primary text-primary px-4 py-1">Limited Edition</Badge>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                  Titanium. <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">Pure Elegance.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-zinc-400 max-w-[600px] leading-relaxed mx-auto">
                  Experience the premium feel of aerospace-grade titanium. Hand-selected for its durability and stunning finish. Only available here.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg mx-auto">
                   <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                      <span className="font-semibold text-sm">Verified Durability</span>
                   </div>
                   <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                      <Zap className="w-8 h-8 text-primary" />
                      <span className="font-semibold text-sm">Fast Fulfillment</span>
                   </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-8">
                  <Button size="lg" className="rounded-full px-10 bg-white text-black hover:bg-zinc-200 font-semibold">
                      Reserve Yours Now
                  </Button>
                </div>
              </FadeIn>

              {/* Large Centered Image Placeholder */}
               <FadeIn delay={0.5} className="w-full">
                 <div className="relative w-full aspect-[21/9] mt-12 rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-950 ring-1 ring-white/10 shadow-2xl mx-auto">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Smartphone className="w-48 h-48 text-zinc-700 opacity-50" />
                   </div>
                   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
                 </div>
               </FadeIn>
          </div>
        </div>
      </section>

      {/* Text Showcase */}
      <section className="py-24 bg-white dark:bg-zinc-950">
         <div className="container max-w-4xl text-center px-4 mx-auto">
            <FadeIn>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Our Promise</h3>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-2xl md:text-4xl font-medium leading-tight text-zinc-900 dark:text-white">
                "Buying tech shouldn't be a gamble. We provide a transparent, secure, and premium buying experience. <span className="text-zinc-400">No hidden defects, no surprises. Just great gadgets.</span>"
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-12 flex justify-center">
                 <Separator className="w-24 bg-primary h-1 rounded-full" />
              </div>
            </FadeIn>
         </div>
      </section>

    </div>
  )
}
