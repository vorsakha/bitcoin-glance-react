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

interface SignalTypes {
  signalObj: {
    signal: string;
    color: string;
    icon: String & StyledComponentBase<IconType, any, {}, never>;
    border: string;
  };
  loading: boolean;
}
