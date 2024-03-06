import { BsSunFill } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { ImExit } from "react-icons/im";
import Button from "src/components/UI/Button";
import { Item } from "./Controllers.styled";

const Controllers: React.FC = () => {
  return (
    <ul>
      <Item>
        <Button
          type="button"
          icon={<BsSunFill />}
          width="40px"
          height="40px"
          background="gray"
          borderRadius="small"
          boxShadow={true}
        />
      </Item>
      <Item>
        <Button
          type="button"
          icon={<HiSpeakerWave />}
          width="40px"
          height="40px"
          background="gray"
          borderRadius="small"
          boxShadow={true}
        />
      </Item>
      <Item>
        <Button
          type="button"
          icon={<LuLanguages />}
          width="40px"
          height="40px"
          background="gray"
          borderRadius="small"
          boxShadow={true}
        />
      </Item>
      <Item>
        <Button
          type="button"
          icon={<ImExit />}
          width="40px"
          height="40px"
          background="gray"
          borderRadius="small"
          boxShadow={true}
        />
      </Item>
    </ul>
  );
};

export default Controllers;
