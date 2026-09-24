import {
  Award,
  Leaf,
  Ruler,
  ShieldCheck,
  Thermometer,
  Users,
  Volume1,
  type LucideProps,
} from "lucide-react";

const map = {
  thermometer: Thermometer,
  shield: ShieldCheck,
  volume: Volume1,
  leaf: Leaf,
  ruler: Ruler,
  award: Award,
  users: Users,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp strokeWidth={1.4} aria-hidden {...props} />;
}
