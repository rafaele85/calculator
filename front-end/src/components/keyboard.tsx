import {makeStyles} from "@material-ui/core";
import {Key} from "./key";

const RIGHT_COLOR = 'orange'

const useStyles = makeStyles(() => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingBottom: '5px',
        }
    }
})

export interface IKeyboardProps {
    onKey: (key: string) => Promise<void>
}

export const Keyboard = (props: IKeyboardProps) => {

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <Key label={'C'} onPress={props.onKey} />
                <Key label='-/+' onPress={props.onKey} />
                <Key label='%' onPress={props.onKey} />
                <Key label={'/'} color={RIGHT_COLOR} onPress={props.onKey} />
            </div>
            <div className={classes.row}>
                <Key label={'9'} onPress={props.onKey} />
                <Key label={'8'} onPress={props.onKey} />
                <Key label={'7'} onPress={props.onKey} />
                <Key label={'x'} return={'*'} color={RIGHT_COLOR} onPress={props.onKey} />
            </div>
            <div className={classes.row}>
                <Key label={'6'} onPress={props.onKey} />
                <Key label={'5'} onPress={props.onKey} />
                <Key label={'4'} onPress={props.onKey} />
                <Key label={'-'} color={RIGHT_COLOR} onPress={props.onKey} />
            </div>
            <div className={classes.row}>
                <Key label={'3'} onPress={props.onKey} />
                <Key label={'2'} onPress={props.onKey} />
                <Key label={'1'} onPress={props.onKey} />
                <Key label={'+'} onPress={props.onKey} />
            </div>
            <div className={classes.row}>
                <Key label={'0'} doubleWidth={true} onPress={props.onKey} />
                <Key label={'.'} onPress={props.onKey} />
                <Key label={'='} onPress={props.onKey} />
            </div>
        </div>
    )
}