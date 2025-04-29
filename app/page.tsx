'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

export default function Home() {
  const { toast } = useToast()

  const showMagicToast = () => {
    toast({
      title: "✨ MAGIC HAPPENING! ✨",
      description: "Abracadabra! Your toast has been magically transformed!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Visitor Counter */}
      <div className="bg-black text-white text-center p-2 marquee">
        <div className="marquee-content">
          <span className="blink">★★★</span> WELCOME TO MAKE THE MAGICIAN'S MAGICAL WEBSITE! YOU ARE VISITOR NUMBER 000738! <span className="blink">★★★</span> UNDER CONSTRUCTION! <span className="blink">★★★</span> BEST VIEWED IN INTERNET EXPLORER 6.0 AT 800x600 RESOLUTION! <span className="blink">★★★</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-10 magic-border my-8">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="wordart text-5xl font-bold tracking-tight lg:text-6xl mb-6">
            MAKE THE MAGICIAN
          </h1>
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/magician.png" 
              alt="Make the Magician" 
              width={300} 
              height={300}
              className="animate-[spin_20s_linear_infinite]"
            />
          </div>
          <p className="mt-6 text-xl max-w-[600px] mx-auto font-bold" style={{color: 'blue'}}>
            !!!PREPARE TO BE AMAZED!!! Make the Magician will BLOW YOUR MIND with his INCREDIBLE magic tricks!!!
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" className="px-8 animate-[bounce_1s_infinite] bg-gradient-to-r from-purple-500 to-pink-500">HIRE ME NOW!</Button>
            <Button size="lg" variant="outline" className="px-8 blink" onClick={showMagicToast}>
              CLICK FOR MAGIC!
            </Button>
          </div>
        </div>
      </section>

      {/* Magic Tricks Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="wordart-rainbow text-4xl font-bold text-center mb-10">
          AMAZING MAGIC TRICKS!!!
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="magic-border overflow-hidden">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3 text-center" style={{color: 'red'}}>DISAPPEARING CARDS!!!</h3>
              <p className="leading-relaxed" style={{color: 'green'}}>
                Make will make your playing cards VANISH into thin air!!! You won't believe your eyes!!! 100% REAL MAGIC!!!
              </p>
              <div className="mt-4 text-center">
                <span className="blink text-xl" style={{color: 'red'}}>ONLY 9.99!!!</span>
              </div>
            </CardContent>
          </Card>
          <Card className="magic-border overflow-hidden">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3 text-center" style={{color: 'blue'}}>RABBIT FROM HAT!!!</h3>
              <p className="leading-relaxed" style={{color: 'purple'}}>
                The CLASSIC trick performed with REAL RABBITS!!! Make has pulled over 1,000 rabbits from his hat!!! AMAZING!!!
              </p>
              <div className="mt-4 text-center">
                <span className="blink text-xl" style={{color: 'red'}}>ONLY 49.99!!!</span>
              </div>
            </CardContent>
          </Card>
          <Card className="magic-border overflow-hidden">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3 text-center" style={{color: 'orange'}}>MIND READING!!!</h3>
              <p className="leading-relaxed" style={{color: 'blue'}}>
                Make will READ YOUR MIND and tell you what you're thinking!!! NO TRICKS!!! REAL PSYCHIC POWERS!!!
              </p>
              <div className="mt-4 text-center">
                <span className="blink text-xl" style={{color: 'red'}}>ONLY 99.99!!!</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="wordart text-4xl font-bold text-center mb-10">
          SATISFIED CUSTOMERS!!!
        </h2>
        <div className="max-w-[800px] mx-auto text-center magic-border p-6">
          <p className="text-xl mb-4" style={{color: 'purple'}}>
            "Make the Magician changed my life!!! His magic is REAL!!! I saw him pull 17 rabbits from his hat!!!" - John D.
          </p>
          <p className="text-xl mb-4" style={{color: 'green'}}>
            "I hired Make for my son's birthday and now my son wants to be a magician too!!! AMAZING SHOW!!!" - Sarah P.
          </p>
          <p className="text-xl" style={{color: 'blue'}}>
            "Make read my mind and told me what I had for breakfast!!! INCREDIBLE!!!" - Mike T.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-10 mb-12">
        <div className="max-w-[800px] mx-auto text-center magic-border p-6">
          <h2 className="wordart-rainbow text-3xl font-bold mb-6">
            BOOK MAKE NOW!!!
          </h2>
          <p className="text-xl mb-8" style={{color: 'red'}}>
            Don't miss your chance to see REAL MAGIC!!! Call now to book Make the Magician for your next event!!!
          </p>
          <p className="text-2xl font-bold blink" style={{color: 'blue'}}>
            CALL NOW: 1-800-MAGIC-WOW
          </p>
          <p className="mt-4" style={{color: 'purple'}}>
            <span className="blink">★</span> Available for birthdays, corporate events, weddings, and bar mitzvahs! <span className="blink">★</span>
          </p>
          <Button variant="outline" className="px-8 mt-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white">
            EMAIL MAKE NOW!!!
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">
        <p>© 2003 Make the Magician. All Rights Reserved.</p>
        <p className="mt-2">
          <span className="mx-2">Home</span> | 
          <span className="mx-2">About</span> | 
          <span className="mx-2">Magic Tricks</span> | 
          <span className="mx-2">Contact</span>
        </p>
        <p className="mt-4 text-xs">
          This site is best viewed in Internet Explorer 6.0 at 800x600 resolution.
        </p>
        <div className="mt-4">
          <span className="mx-2">Hit Counter: 000738</span>
        </div>
      </footer>
    </div>
  )
}
