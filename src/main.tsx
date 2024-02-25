import register from './preact-custom-element';
import { useEffect, useState } from 'preact/hooks';

interface CarInfo{
    LicenseNo: string
    CampaignNote: any
    IsValidLicenceNo: boolean
    VinNr: string
    Brand: string
    Model: string
    BrandLogo: string
    ImageUrl: string
    TireDimension: string
    CampaignCode: any
    Department: string
    IsDiscount: boolean
    BaseAmount: number
    NetAmount: number
    Product: string
    IsTireHotelActive: boolean
    HasAppointment: boolean
}

interface CarComponentProps{
    license: string;
}

export const CarComponent = ({ license = 'CF30540' }: CarComponentProps) => {
    const [isLoading, setLoading] = useState(true);
    const [car, setCar] = useState<CarInfo | null>(null);

    useEffect(() => {
        setLoading(true)
        fetch(`https://tjenester.mittdekkhotell.no/api/quotes?licenseNo=${license}&campaignCode=&department=asker`)
        .then(reponse => reponse.json())
        .then(responseData => {
            setCar(responseData);
            setLoading(false)
        })
    }, [license])

    if(isLoading){
        return <p><i class="fa-solid fa-spinner"></i></p>
    }

    return <>
            <div class="card" style="width: 18rem;">
        <img src={car?.ImageUrl} class="card-img-top" alt="Car image" />
        <div class="card-body">
            <h5 class="card-title">{car?.LicenseNo} <span><img src={car?.BrandLogo} style="float: right;width: 25px;" /></span></h5>
            <p>The information in this card come from MDH services</p>
        </div>
        <ul class="list-group list-group-flush">
                <li class="list-group-item">{car?.Model}</li>   
                <li class="list-group-item">{car?.Brand}</li>
                <li class="list-group-item">{car?.VinNr}</li>
            </ul>
            <div class="card-body">
            <a href="#" class="btn btn-primary">Do nothing here</a>
            </div>
        </div>
    </>
}

register(CarComponent, 'mdh-car', ['license']);