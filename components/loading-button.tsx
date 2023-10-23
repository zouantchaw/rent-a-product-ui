import { Button } from "@/components/ui/button"

interface LoadingButtonProps {
  children: React.ReactNode;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ children }) => {
  return (
    <Button className="mt-2 w-full">
      <div className="animate-pulse flex space-x-1">
        <div className="h-2 w-2 bg-current rounded-full" />
        <div className="h-2 w-2 bg-current rounded-full" />
        <div className="h-2 w-2 bg-current rounded-full" />
      </div>
    </Button>
  )
}
