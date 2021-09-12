import {makeStyles} from "@material-ui/core";

const KEY_SIZE=30
const BGCOLOR='gray'
const COLOR='black'
const PADDING=5
const MARGIN=5
const DOUBLEWIDTH=KEY_SIZE*2+PADDING*2+MARGIN



const useStyles = makeStyles(() => {
    return {
        key: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${KEY_SIZE}px`,
            height: `${KEY_SIZE}px`,
            backgroundColor: BGCOLOR,
            color: COLOR,
            padding: `${PADDING}px`,
            textAlign: 'center',
            verticalAlign: 'middle',
            marginRight: `${MARGIN}px`,
            cursor: 'pointer',
        },
        doubleWidth: {
            width: `${DOUBLEWIDTH}px`,
            height: `${KEY_SIZE}px`,
            backgroundColor: BGCOLOR,
            color: COLOR,
            padding: `${PADDING}px`,
            textAlign: 'center',
            verticalAlign: 'middle',
            marginRight: `${MARGIN}px`,
            cursor: 'pointer',
        },
    }
})

export type IKeyProps = {
    label: string,
    return?: string,
    doubleWidth?: boolean,
    color?: string
    onPress: (label: string) => Promise<void>
}
export const Key = (props: IKeyProps) => {

    const handleClick = async () => {
        await props.onPress(props.return || props.label)
    }

    const classes = useStyles()

    let klass = (props.doubleWidth ? classes.doubleWidth : classes.key)
    let style
    if (props.color) {
        style={backgroundColor: props.color}
    }
    return (
        <div className={klass} style={style} onClick={handleClick}>
            {props.label}
        </div>
    )
}