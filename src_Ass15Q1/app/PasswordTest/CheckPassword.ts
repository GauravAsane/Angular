export function CheckPassword(str : string)
{
    let password = str.split('');
    let small = 0;
    let capital = 0;
    let digit = 0;
    let special = 0;

    for(let i = 0 ; i < password.length ; i++)
    {
        if(password[i] >= 'A' && password[i] <= 'Z')
        {
            capital = capital + 1;
        }
        else if(password[i] >= 'a' && password[i] <= 'z')
        {
            small = small + 1;
        }
        else if(password[i] >= '0' && password[i] <= '9')
        {
            digit = digit + 1;
        }
        else
        {
            special = special + 1
        }
    }

    if((capital >= 2) && (small >= 3) && (digit >= 2) && (special >= 1))
    {
        return true;
    }
    else
    {
        return false;
    }
    
}