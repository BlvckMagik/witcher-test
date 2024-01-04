import * as Styled from "./index.styled";

type ReadOnlyCodeFieldProps = {
  code: string;
};

const ReadOnlyCodeField: React.FC<ReadOnlyCodeFieldProps> = ({ code }) => {
  return (
    <Styled.TextField
      value={code}
      InputProps={{
        readOnly: true,
      }}
    />
  );
};

export default ReadOnlyCodeField;
