interface RestObjType {
  open: string[];
  high: string[];
  low: string[];
  close: string[];
}
interface SignalType {
  signal: string;
  color: string;
  icon: String & StyledComponentBase<IconType, any, {}, never>;
  border: string;
}
