export const setInitial = name => {
    const nameSplit = name.split(' ');
    const initials = (nameSplit[0].substring(1,0)+nameSplit[nameSplit.length-1].substring(1,0)).toUpperCase();

    return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: initials,
    };
}

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
  } 