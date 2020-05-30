import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { View } from 'react-native'

export default function DatePicker({ date, onChange }) {
    const [dateNow, setDateNow] = useState(new Date(date))

    return (
        <View>
            <DateTimePicker
            style={{ backgroundColor: '#fff' }}
            value={dateNow}
            display='default'
            mode='date'
            onChange={(e, d) => {
                const current = d || dateNow

                setDateNow(current)
                onChange(current)
            }}
            />
        </View>
    )
}