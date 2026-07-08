import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/98427d21-d67e-4f65-a9c8-226636573610/bucket/05bdeb2a-ffec-4b56-8221-cd259e4e5c12.png';

const BranchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
    <path d="M10 19V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10 15.5C10 15.5 7 13.5 6.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10 12C10 12 13 10 13.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10 8.5C10 8.5 7.5 7 7.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M6.5 10C5 9.5 3.5 8 3.5 6C5 6 6.5 7 6.5 10Z" fill="currentColor" opacity="0.6"/>
    <path d="M13.5 6.5C15 6 16.5 4.5 16.5 2.5C15 2.5 13.5 4 13.5 6.5Z" fill="currentColor" opacity="0.6"/>
    <path d="M7.5 4C6.5 3.5 5 2.5 5 1C6.2 1 7.5 2 7.5 4Z" fill="currentColor" opacity="0.6"/>
    <path d="M10 12C10 12 12 10.5 14.5 11C13.5 12.5 11.5 13 10 12Z" fill="currentColor" opacity="0.5"/>
    <path d="M10 15.5C10 15.5 8 14.5 6 15.5C7 17 9 17 10 15.5Z" fill="currentColor" opacity="0.5"/>
  </svg>
);

const audience = [
  'к вечеру болит спина или шея',
  'тело стало скованным и тяжёлым',
  'энергии хватает только на работу и быт',
  'сложно заставить себя заниматься регулярно',
  'страшно навредить себе упражнениями',
  'есть протрузии, нарушения осанки, напряжение',
];

const results = [
  { icon: 'Wind', text: 'уйдёт напряжение в шее и плечах' },
  { icon: 'Activity', text: 'спина станет более подвижной' },
  { icon: 'Sun', text: 'появится больше энергии' },
  { icon: 'Moon', text: 'улучшится сон' },
  { icon: 'Feather', text: 'движения станут свободнее' },
  { icon: 'Flower2', text: 'тело станет сильнее и гибче' },
  { icon: 'StretchHorizontal', text: 'улучшится осанка' },
  { icon: 'Heart', text: 'появится ощущение лёгкости и покоя' },
];

const inside = [
  {
    icon: 'Video',
    title: 'Онлайн-практики',
    text: '1–3 живых занятия в неделю. Совместная практика, ответы на вопросы и поддержка.',
  },
  {
    icon: 'Library',
    title: 'Библиотека занятий',
    text: 'Практики 10–60 минут: здоровая спина, шея и плечи, суставы, осанка, мягкая растяжка, восстановление, лимфодренаж.',
  },
  {
    icon: 'CalendarDays',
    title: 'Комплексы на каждый день',
    text: 'Короткие занятия по 10–30 минут — утром, в течение дня или вечером перед сном.',
  },
  {
    icon: 'AirVent',
    title: 'Дыхательные практики',
    text: 'Пранаяма помогает успокоить нервную систему, восстановить энергию, улучшить сон и снизить стресс.',
  },
  {
    icon: 'BookOpen',
    title: 'База знаний',
    text: 'Материалы о здоровье позвоночника, биомеханике тела, привычках, восстановлении и осознанности.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Чат клуба',
    text: 'Поддержка, общение и мотивация. С единомышленницами регулярность даётся гораздо легче.',
  },
];

const reviews = [
  'уменьшение боли и напряжения',
  'улучшение осанки',
  'повышение энергии',
  'более качественный сон',
  'ощущение лёгкости',
  'улучшение настроения',
  'желание больше двигаться',
];

const faq = [
  {
    q: 'У меня совсем нет времени',
    a: 'В архиве много практик по 10–30 минут, и их легко можно встроить в любой день. Можно некоторые позы делать на работе, пока варите завтрак или обед, и даже сидя в транспорте. Подходите творчески — и всё получится!',
  },
  {
    q: 'Я никогда не занималась йогой',
    a: 'Самое главное — сделать 1 шаг: расстелить коврик. В клубе есть программы для начинающих, и постепенно вы сможете увеличивать нагрузки. Когда вы вступите в клуб, вы можете задавать вопросы мне и участницам, я с удовольствием дам необходимые рекомендации.',
  },
  {
    q: 'Стоит мне заниматься у вас, если я от природы негибкая?',
    a: 'Гибкость тела — одна из основных составляющих здоровья и долголетия. Йога — лучший способ без насилия вернуть природную гибкость. При правильном подходе и регулярных занятиях вы получите первые результаты уже через 1–2 месяца.',
  },
  {
    q: 'У меня есть проблемы со спиной',
    a: 'В клубе мы занимаемся не для рекордов и подиумов, а для улучшения здоровья, а йога наилучшим образом подходит для этого. Бережно и мягко мы восстанавливаем здоровье ОДА, а это влияет на все остальные системы организма. При вступлении в клуб вы получаете от меня персональные рекомендации, как заниматься, пока не уйдут проблемы.',
  },
  {
    q: 'Я боюсь, что снова брошу',
    a: 'Поддержка сообщества и живые занятия помогают сохранить регулярность. Клуб будет регулярно напоминать вам о новых занятиях. Это очень полезно и увлекательно, ваше тело само будет просить у вас движений.',
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground bg-grain selection:bg-accent/30">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="font-display text-2xl tracking-tight">
            Лёгкость <span className="text-primary-readable italic">в теле</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground">
            <a href="#about" className="hover:text-primary-readable transition-colors">О клубе</a>
            <a href="#inside" className="hover:text-primary-readable transition-colors">Что внутри</a>
            <a href="#author" className="hover:text-primary-readable transition-colors">Автор</a>
            <a href="#pricing" className="hover:text-primary-readable transition-colors">Форматы</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" className="rounded-full">Хочу участвовать</Button>
            <button className="md:hidden ml-1" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#about" onClick={() => setMenuOpen(false)}>О клубе</a>
            <a href="#inside" onClick={() => setMenuOpen(false)}>Что внутри</a>
            <a href="#author" onClick={() => setMenuOpen(false)}>Автор</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Форматы</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-secondary/40 leaf-blob blur-2xl" />
        <div className="absolute top-40 -left-32 w-[360px] h-[360px] bg-primary/15 leaf-blob blur-3xl" />
        <div className="container relative grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-readable mb-6">
              <Icon name="Leaf" size={16} /> онлайн-клуб для женщин
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6">
              Лёгкость в теле начинается{' '}
              <span className="italic text-primary-readable">не с изнурительных тренировок</span>,
              а с заботы о себе
            </h1>
            <p className="text-lg text-primary-readable max-w-xl mb-8 leading-relaxed">
              Пространство для женщин, где забота о себе становится
              естественной частью жизни, а лёгкость, энергия и свобода движений —
              вашим новым состоянием. Мягкие практики, живые занятия и готовые
              комплексы даже для плотного графика.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full text-base px-8">
                <a href="#pricing">
                  Хочу участвовать <Icon name="ArrowRight" size={18} className="ml-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8">
                <a href="#pricing">Узнать подробнее</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="soft-frame overflow-hidden shadow-2xl shadow-primary/20 border border-border/50 aspect-[3/4]">
              <img src={HERO_IMG} alt="Практика" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="about" className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">
            Кому подойдёт клуб
          </h2>
          <p className="text-center font-display text-lg md:text-xl text-muted-foreground mb-10">Этот клуб для вас, если:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {audience.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card rounded-2xl p-5 border border-border/60"
              >
                <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-secondary/30 rounded-3xl p-8 text-center">
            <p className="text-muted-foreground mb-2">Возможно, вы уже пробовали фитнес, марафоны, интенсивы или случайные видео.</p>
            <p className="font-display text-2xl italic text-primary-readable">
              Но регулярности не получилось, а тело продолжает подавать сигналы.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 md:py-16 bg-primary/8 relative overflow-hidden" style={{background: 'hsl(152 16% 44% / 0.08)'}}>
        <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-primary/10 leaf-blob blur-3xl" />
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary/8 leaf-blob blur-2xl" />
        <div className="container relative max-w-5xl">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-center">Что изменится</h2>
          <p className="text-center font-display text-lg md:text-xl text-muted-foreground mb-14">
            После регулярных занятий вы заметите
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <Icon name={r.icon} size={28} className="mb-3 text-primary-readable" />
                <p className="text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-display text-2xl md:text-3xl italic mt-14 max-w-2xl mx-auto text-primary-readable">
            Главный результат — тело снова стало источником энергии, а не усталости.
          </p>
        </div>
      </section>

      {/* INSIDE */}
      <section id="inside" className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-center">Что внутри клуба</h2>
          <p className="text-center font-display text-lg md:text-xl text-muted-foreground mb-14 max-w-xl mx-auto">
            Закрытое онлайн-пространство без жёстких нормативов. Вы занимаетесь в удобном темпе.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inside.map((b, i) => (
              <div
                key={i}
                className="group bg-card rounded-3xl p-7 border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/40 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={b.icon} size={22} />
                </div>
                <h3 className="font-display text-2xl mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STAY + REVIEWS */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl mb-6">Почему женщины хотят в клуб</h2>
            <p className="text-muted-foreground mb-6">Потому что здесь не нужно:</p>
            <ul className="space-y-3">
              {['заставлять себя', 'выдерживать сложные тренировки', 'подстраиваться под расписание занятий', 'сравнивать себя с другими'].map((t, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icon name="X" size={18} className="text-accent shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              Здесь можно двигаться в своём темпе и постепенно замечать изменения.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl mb-6">Результаты участниц</h2>
            <div className="flex flex-wrap gap-3">
              {reviews.map((r, i) => (
                <span
                  key={i}
                  className="bg-card rounded-full px-5 py-2.5 text-sm border border-border/60"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="py-12 md:py-16">
        <div className="container max-w-5xl grid md:grid-cols-[300px_1fr] gap-12 items-center">
          <div className="soft-frame overflow-hidden shadow-xl shadow-primary/15 border border-border/50 aspect-[3/4]">
            <img
              src="https://cdn.poehali.dev/projects/98427d21-d67e-4f65-a9c8-226636573610/bucket/47ab04a2-c8c1-4bbc-9b39-8ff3648b5f77.png"
              alt="Ольга Илькинова"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary-readable">об авторе</span>
            <h2 className="font-display text-4xl md:text-5xl my-4">Ольга Илькинова</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Преподаватель йоги и проводник к здоровому телу и духу. Мой подход основан на
              регулярной и сбалансированной практике. Всё внимание мы уделяем себе, учимся
              чувствовать каждую клеточку своего тела, своё состояние в данный момент.
              Заниматься могут все, нет ограничения по возрасту, подготовке, состоянию здоровья.
            </p>
            <p className="font-display text-2xl italic text-primary-readable">
              Главная задача — вернуть телу естественную лёгкость и энергию.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-12 md:py-16 bg-muted/50">
        <div className="container max-w-5xl">
          <h2 className="font-display text-4xl md:text-5xl mb-14 text-center">Форматы участия</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 border border-border/60 flex flex-col">
              <h3 className="font-display text-3xl mb-1">Гостевой доступ</h3>
              <p className="text-4xl font-display text-primary mb-1">3 000 ₽ <span className="text-base text-muted-foreground">/ месяц</span></p>
              <p className="text-sm text-muted-foreground mb-6">Подходит для знакомства с клубом</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['живые занятия', 'чат клуба', 'архив практик', 'занятия для начинающих'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Icon name="Check" size={18} className="text-primary shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="lg" className="rounded-full w-full">
                <a href="/join">Выбрать</a>
              </Button>
            </div>
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 border border-primary flex flex-col relative overflow-hidden">
              <span className="absolute top-6 right-6 text-xs bg-accent text-accent-foreground rounded-full px-3 py-1">Популярно</span>
              <h3 className="font-display text-3xl mb-1">Годовое сопровождение</h3>
              <p className="text-4xl font-display mb-1">30 000 ₽ <span className="text-base text-primary-foreground/70">/ год</span></p>
              <p className="text-sm text-primary-foreground/70 mb-6">Полное погружение и персональная работа</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['полный доступ ко всем материалам', 'участие во всех практиках', 'закрытый чат', 'новые программы', 'две персональные встречи'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Icon name="Check" size={18} className="text-secondary shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="secondary" className="rounded-full w-full">
                <a href="/join">Вступить в клуб</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">Вопросы и сомнения</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border/60 rounded-2xl px-6"
              >
                <AccordionTrigger className="font-display text-xl hover:no-underline text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden" style={{background: 'hsl(152 16% 44% / 0.08)'}}>
        <div className="absolute -top-20 -left-20 w-[380px] h-[380px] bg-primary/15 leaf-blob blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/10 leaf-blob blur-2xl" />
        <div className="container relative max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <Icon name="Leaf" size={14} /> клуб «Лёгкость в теле»
          </span>
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight text-foreground">
            Именно сейчас лучший момент начать
          </h2>
          <p className="text-muted-foreground text-lg mb-2">
            Не ради идеальной формы. Не ради сложных поз.
          </p>
          <p className="text-muted-foreground text-lg mb-10">
            А ради того, чтобы снова чувствовать лёгкость, энергию и удовольствие от движения.
          </p>
          <Button asChild size="lg" className="rounded-full text-base px-10">
            <a href="#pricing">
              Хочу участвовать <Icon name="ArrowRight" size={18} className="ml-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border/60">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display text-xl text-foreground">Лёгкость в теле</span>
          <span>© {new Date().getFullYear()} Онлайн-клуб бережных практик</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;