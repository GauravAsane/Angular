
export function CountCapital(str : string)
{
    let counter : number  = 0;
    let data = str.split('');

    for(let i = 0 ; i < data.length ; i++ )
    {
        if(data[i] >= 'A' && data[i] <= 'Z')
        {
            counter = counter + 1;
        }
    }
   
    return counter;
}