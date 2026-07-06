import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const TELEGRAM_LINK = 'https://t.me/Yoga_life_72';
const MAX_LINK = 'https://max.ru/u/f9LHodD0cOLhXAHqruix2GC71Io3EB56p18q2xK4-hzaX4oCErZCwAh4ksI-';

const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 4.5L2.5 12.1c-1 .4-1 1.7.1 2l4.9 1.6 1.9 6c.2.7 1.1.9 1.6.4l2.9-2.8 4.9 3.6c.7.5 1.7.1 1.9-.7l3.2-15.4c.2-1-.8-1.8-1.9-1.3z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M7.5 15.7l9.7-8.4-11.4 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MaxIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M7 16.5V8.5l3.6 5 1.4-2 1.4 2 3.6-5v8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const Join = () => {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grain selection:bg-accent/30 flex flex-col">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center h-16">
          <a href="/" className="font-display text-2xl tracking-tight">
            Лёгкость <span className="text-primary-readable italic">в теле</span>
          </a>
        </div>
      </header>

      <section className="relative flex-1 flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-secondary/40 leaf-blob blur-2xl" />
        <div className="absolute bottom-0 -left-32 w-[360px] h-[360px] bg-primary/15 leaf-blob blur-3xl" />
        <div className="container relative max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-readable mb-6">
            <Icon name="Leaf" size={16} /> клуб «Лёгкость в теле»
          </span>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Остался последний шаг!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Чтобы получить доступ к клубу, выберите удобный для вас мессенджер и
            отправьте мне в личные сообщения фразу:
          </p>
          <p className="font-display text-2xl md:text-3xl italic text-primary-readable mb-6">
            «Хочу в клуб»
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            Я свяжусь с вами, отвечу на все вопросы, помогу оформить участие и
            отправлю дальнейшие инструкции.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            До встречи в клубе «Лёгкость в теле»!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full text-base px-8 w-full sm:w-auto">
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <TelegramIcon /> Написать в Telegram
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full text-base px-8 w-full sm:w-auto">
              <a href={MAX_LINK} target="_blank" rel="noopener noreferrer">
                <MaxIcon /> Написать в MAX
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border/60">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display text-xl text-foreground">Лёгкость в теле</span>
          <span>© {new Date().getFullYear()} Онлайн-клуб бережных практик</span>
        </div>
      </footer>
    </div>
  );
};

export default Join;
