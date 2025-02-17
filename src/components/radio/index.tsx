import {Radio, RadioGroup, Text, View} from '@tarojs/components';
import Taro from '@tarojs/taro';
import H5Radio from './h5';
import {IProps} from '../../../@types/radio';


export default function ClRadio(props: IProps) {
  const type = props.type === 'form' ? 'form' : 'normal';
  const shapeClassName = props.shape === 'radio' ? 'radio' : 'normal';
  const title = props.title ? props.title : '';
  const colorClassName = props.color ? props.color : 'green';
  const directionClassName = props.direction === 'horizontal' ? 'flex' : '';
  const list = props.radioGroup ? props.radioGroup : [];

  const changeRadio = e => {
    props.onChange && props.onChange(e.detail.value);
  };
  const radioComponent = list.map((item, index) => (
    <View className='padding-xs' key={item.value}>
      <Text className='padding-right-sm'>{item.key}</Text>
      <Radio
        className={`${colorClassName} ${shapeClassName}`}
        checked={item.value === props.checkedValue}
        value={item.value || ''}
      />
    </View>
  ));
  const formRadioComponent = (
    <View className='cu-form-group'>
      <View className='title'>{title}</View>
      <View className={directionClassName}>{radioComponent}</View>
    </View>
  );

  const mpRadio =
    <RadioGroup
      onChange={changeRadio}
      className={`${props.type === 'form' ? 'block' : ''}`}
    >
      {type === 'form' ? (
        formRadioComponent
      ) : (
        <View className={directionClassName}>{radioComponent}</View>
      )}
    </RadioGroup>;
  const RadioComponent = Taro.getEnv() === Taro.ENV_TYPE.WEB ? <H5Radio {...props} /> : mpRadio;

  return (
    RadioComponent
  );
}

ClRadio.options = {
  addGlobalClass: true
};
