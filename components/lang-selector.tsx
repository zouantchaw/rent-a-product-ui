import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { useToast } from "./ui/use-toast"

export function LangSelector() {
  return (
    <Select>
      <SelectTrigger className="w-20 h-15">
        <SelectValue placeholder="🇺🇸" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="english">🇺🇸</SelectItem>
          <SelectItem value="spanish">🇲🇽</SelectItem>
          <SelectItem value="french">🇫🇷</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
