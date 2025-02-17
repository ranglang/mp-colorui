import {Block, View} from '@tarojs/components';
import Taro, {pxTransform} from '@tarojs/taro';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/timeline';
import ClFlex from "../flex";



export default function ClTimeline(props: IProps) {
  const times = props.times || [];
  const iconColorClassName = color => (color ? TEXT_COLOR_LIST[color] : '');
  const iconClassName = icon => (icon ? `cuIcon-${icon}` : '');
  const bgColorClassName = color => (color ? BG_COLOR_LIST[color] : '');
  const items = times.map((item, index) => (
    <Block key={index}>
      {
        item.node ? item.node : <View
          className={`cu-item ${iconColorClassName(item.iconColor)} ${iconClassName(
            item.icon
          )}`}
        >
          <View className={`${bgColorClassName(item.bgColor)} content`}>
            <ClFlex justify='between' align='end'>
              <View style={{fontSize: pxTransform(36)}}>{item.title}</View>
              <View>{item.time}</View>
            </ClFlex>
            {
              item.content ? item.content.map((desc, index) => (
                <View key={index}>{desc}</View>
              )) : ''
            }
          </View>
        </View>
      }
    </Block>
  ));
  return <View className='cu-timeline'>{items}</View>;
}

ClTimeline.options = {
  addGlobalClass: true
};
