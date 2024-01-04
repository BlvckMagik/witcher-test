import { useEffect, useState } from "react";

import DoneIcon from "@mui/icons-material/Done";

import * as Styled from "./index.styled";

type ReadOnlyCodeFieldProps = {
  code: string;
};

const CopyButton: React.FC<ReadOnlyCodeFieldProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  });

  return (
    <Styled.Button onClick={onClick}>
      {isCopied ? <DoneIcon fontSize="large" /> : "COPY CODE"}
    </Styled.Button>
  );
};

export default CopyButton;
