import React from "react";
import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import { completeStep } from "../../redux/reducers/stepsSlice";

export const FooterButtons = ({
  current,
  showButtonCondition,
  onChangeStep,
}) => {
  const dispatch = useDispatch();

  function handleChangeStep(value) {
    onChangeStep(value);
    dispatch(completeStep(false));
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 50,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Space>
        {current > 0 && (
          <Button size="large" onClick={() => handleChangeStep(-1)}>
            Back
          </Button>
        )}
        {showButtonCondition && (
          <Button
            size="large"
            type="primary"
            onClick={() => handleChangeStep(1)}
          >
            Дальше
          </Button>
        )}
        <Button size="small" danger onClick={() => handleChangeStep(1)}>
          Дальше
          <br />
          (правильного ответа не существует)
        </Button>
      </Space>
    </div>
  );
};
