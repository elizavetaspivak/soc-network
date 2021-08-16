import {UserType} from '../../redux/usersReduser';

export const updateObjectInArray = (items: any, itemId: number, objPropName: string, newObjectProps: any) => {
    return items.map((u: any) => u[objPropName] === itemId ? {...u, ...newObjectProps} : u)
}