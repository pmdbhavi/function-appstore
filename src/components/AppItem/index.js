import {AppsList,Image,AppName} from './styledComponents'

const AppItem=(props)=>{
    const {details}=props
    const {imageUrl,appName}=details
    return(
        <AppsList>
            <Image src={imageUrl} alt={appName}/>
            <AppName>{appName}</AppName>
        </AppsList>
    )
}

export default AppItem