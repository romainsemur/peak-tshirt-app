import Price from ".";

export default {
  title: "Price",
  component: Price,
};

const Template = (args) => <Price {...args} />;
export const PositivePrice = Template.bind({});
PositivePrice.args = {
  value: 12.34,
};

export const NegativePrice = Template.bind({});
NegativePrice.args = {
  value: -56.36,
};

export const DiscountPrice = Template.bind({});
DiscountPrice.args = {
  value: -56.36,
  variant: "discount",
};
