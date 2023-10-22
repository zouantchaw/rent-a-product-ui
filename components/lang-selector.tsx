import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"

export function LangSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="🇺🇸 English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="english">🇺🇸 English</SelectItem>
          <SelectItem value="spanish">🇪🇸 Español</SelectItem>
          <SelectItem value="french">🇫🇷 Français</SelectItem>
          <SelectItem value="german">🇩🇪 Deutsch</SelectItem>
          <SelectItem value="italian">🇮🇹 Italiano</SelectItem>
          <SelectItem value="portuguese">🇵🇹 Português</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
