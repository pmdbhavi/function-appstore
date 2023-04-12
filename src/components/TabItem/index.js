import {TabList,Button,Para} from './styledComponents'

const TabItem=(props)=>{
    const {tabDetails,clickTabs,isActive}=props
    const {tabId,displayText}=tabDetails
    const changeTab=()=>{
        clickTabs(tabId)
    }

    return(
        <TabList>
            <Button type="button" onClick={changeTab} active={!isActive} >
                <Para>{displayText}</Para>
            </Button>
        </TabList>
    )
}
export default TabItem