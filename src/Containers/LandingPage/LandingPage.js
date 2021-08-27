import { useState } from "react";

import { Header, Container, RadioGroup, Button } from "../../Components";

import { data } from "../../data";

import "./landing.css";

export const LandingPage = () => {
  const [firstSelectedRadioGroup, setFirstSelectedRadioGroup] = useState();
  const [secondSelectedRadioGroup, setSecondSelectedRadioGroup] = useState();
  const [thirdSelectedRadioGroup, setThirdSelectedRadioGroup] = useState();

  const rules = data.rules;

  const firstGroupMenu = {
    name: "First selection",
    data: data.menus[0],
  };

  const secondGroupMenu = {
    name: "Second selection",
    data: !secondSelectedRadioGroup
      ? data.menus[1]
      : data.menus[1].filter(
          (d) => !rules[+firstSelectedRadioGroup]?.includes(+d.id)
        ),
  };

  const thirdGroupMenu = {
    name: "Third selection",
    data: !firstSelectedRadioGroup
      ? data.menus[2]
      : data.menus[2].filter(
          (d) =>
            !rules[+firstSelectedRadioGroup]?.includes(+d.id) &&
            !rules[+secondSelectedRadioGroup]?.includes(+d.id)
        ),
  };

  return (
    <div>
      <Header />
      <div className="landing-wrapper">
        <Container>
          <RadioGroup
            data={firstGroupMenu.data}
            groupName={firstGroupMenu.name}
            onChange={setFirstSelectedRadioGroup}
          />

          <RadioGroup
            data={secondGroupMenu.data}
            groupName={secondGroupMenu.name}
            onChange={setSecondSelectedRadioGroup}
            disabled={!firstSelectedRadioGroup}
          />

          <RadioGroup
            data={thirdGroupMenu.data}
            groupName={thirdGroupMenu.name}
            onChange={setThirdSelectedRadioGroup}
            disabled={!secondSelectedRadioGroup}
          />

          <Button disabled={!thirdSelectedRadioGroup}>Submit</Button>
        </Container>
      </div>
    </div>
  );
};
