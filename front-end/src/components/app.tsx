import {Display} from "./display";
import {useState} from "react";
import {makeStyles} from "@material-ui/core";
import {Keyboard} from "./keyboard";
import {api} from "../api/api";

const useStyles = makeStyles(() => {
    return {
        body: {
           width: '100%',
           height: '100%',
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'center',
        },
        container: {
            flex: 0,
            display: 'flex',
            flexDirection: 'column',
        },
        modal: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '60px',
            zIndex: 100,
            background: 'transparent',
        },
        loader: {
            fontSize: '28px',
            color: 'white',
        }
    }
})

export const App = () => {
    const [displayValue, setDisplayValue] = useState<string>('0')
    const [isLoading, setLoading] = useState<boolean>(false)

    const handleKey = async (key: string) => {
        let value = displayValue
        try {
            setLoading(true)
            const res = await api({displayValue: value, key})
            setLoading(false)
            setDisplayValue(res.value)
        } catch (err) {
            console.error(err)
        }
    }

    const classes = useStyles()

    let jsxLoader
    if (isLoading) {
        jsxLoader = (
            <div className={classes.modal}>
                <div className={classes.loader}>
                    Processing ...
                </div>
            </div>
        )
    }

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <Display
                    value={displayValue}
                    onKey={handleKey}
                />
                <Keyboard
                    onKey={handleKey}
                />
            </div>
            {jsxLoader}
        </div>
    )
}