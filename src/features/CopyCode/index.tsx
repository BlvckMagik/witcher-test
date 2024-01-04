import ReadOnlyCodeField from "@entities/ReadOnlyCodeField";
import CopyButton from "@entities/CopyButton";
import { BONUS_CODE } from "@shared/constants";

import * as Styled from "./index.styled";

const CopyCode: React.FC = () => {
  return (
    <Styled.Container>
      <ReadOnlyCodeField code={BONUS_CODE}></ReadOnlyCodeField>
      <CopyButton code={BONUS_CODE} />
    </Styled.Container>
  );
};

export default CopyCode;
