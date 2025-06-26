import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type TextProps = {
  text: string;
  size?: "default" | "small";
  width?: "narrow" | "default" | "wider";
  uppercase?: boolean;
  className?: string;
};

const textVariants = cva("text-pretty indent-24", {
  variants: {
    size: {
      small: "text-base",
      default: "text-4xl",
    },
    width: {
      narrow: "max-w-xl",
      default: "max-w-prose",
      wider: "max-w-none",
    },
    uppercase: {
      true: "uppercase",
    },
  },
});

const Text: React.FC<TextProps> = ({
  text,
  size = "default",
  width = "narrow",
  uppercase,
  className,
}) => {
  return (
    <div className={cn(textVariants({ width, size, uppercase, className }))}>
      <p>{text}</p>
    </div>
  );
};

export default Text;
