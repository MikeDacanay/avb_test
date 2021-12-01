export const setInitial = name => {
    const nameSplit = name.split(' ');
    return (nameSplit[0].substring(1,0)+nameSplit[nameSplit.length-1].substring(1,0)).toUpperCase();
}
