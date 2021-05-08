const toReadable = (str: string): string => {
    str = str.replace('_', ' ')
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
}

export default toReadable
