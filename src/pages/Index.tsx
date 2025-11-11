import { useState } from 'react';

const Index = () => {
  const [isStruggling, setIsStruggling] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-900/20 to-background overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-glow">
          Помогите мне!
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground text-center mb-12 animate-float">
          Я застряла и пытаюсь выбраться... 😰
        </p>

        <div className="relative w-full max-w-2xl aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
          
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsStruggling(!isStruggling)}
          >
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isStruggling ? 'animate-struggle' : ''
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30 blur-xl"></div>
                
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-primary/50 shadow-2xl">
                  <div className="text-center space-y-6">
                    <div className={`text-8xl md:text-9xl ${isStruggling ? 'animate-wiggle' : 'animate-bounce-up'}`}>
                      🙋‍♀️
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-center gap-2">
                        <div className="w-2 h-16 bg-gradient-to-b from-primary to-transparent rounded-full opacity-60"></div>
                        <div className="w-2 h-20 bg-gradient-to-b from-secondary to-transparent rounded-full opacity-60"></div>
                        <div className="w-2 h-16 bg-gradient-to-b from-accent to-transparent rounded-full opacity-60"></div>
                      </div>
                      
                      <p className="text-2xl md:text-3xl font-semibold text-primary">
                        {isStruggling ? 'Пытаюсь освободиться!' : 'Нажми на меня!'}
                      </p>
                      
                      <p className="text-sm md:text-base text-muted-foreground">
                        {isStruggling 
                          ? 'Движусь изо всех сил... 💪' 
                          : 'Помоги мне выбраться отсюда...'}
                      </p>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full bg-primary transition-all duration-300 ${
                            isStruggling ? 'animate-bounce-up' : 'opacity-30'
                          }`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                  <div className="w-16 h-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            ✨ Кликни на персонажа, чтобы увидеть движения ✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <span className="text-primary font-medium">💫 Интерактивная анимация</span>
            </div>
            <div className="px-6 py-3 bg-secondary/10 border border-secondary/30 rounded-full backdrop-blur-sm">
              <span className="text-secondary font-medium">🎨 Аниме стиль</span>
            </div>
            <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm">
              <span className="text-accent font-medium">🌈 Яркие цвета</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Index;
