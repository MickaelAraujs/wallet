import React from 'react'
import RNPickerSelect from 'react-native-picker-select'

import { DropdownView } from './styles'

export default function Dropdown({ value, onChange }) {
    return (
        <DropdownView>
            <RNPickerSelect
            style={{
                inputIOS: {
                    height: 53,
                    fontSize: 18
                }
            }}

            placeholder={{
                label: 'selecione o tipo',
                color: '#000000',
                value: null,
            }}

            items={[
                {
                    label: 'Ganho',
                    value: 'ganho',
                    color: '#000000'
                },

                {
                    label: 'Gasto',
                    value: 'gasto',
                    color: '#000000'
                },
            ]}

            value={value}
            onValueChange={value => onChange(value)}
            
            />
        </DropdownView>
    )
}