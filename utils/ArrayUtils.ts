

/**
 *
 * @param list list of objects
 * @param getKey function like (elem) => elem['name']
 * @return A dictionary in which objects are group by getKey(object)
 * @example
 *          groupBy(
 *                    [
 *                        {name:"Andrea", type:1},
 *                        {name:"Marco", type:1},
 *                        {name:"Franco", type:2}
 *                     ],
 *                     (item) => item['type']
 *                  )
 *          returns: {
 *                       1: [
 *                             {name:"Andrea", type:1},
 *                             {name:"Marco", type:1},
 *                          ]
 *                       2: [
 *                             {name:"Franco", type:2}
 *                          ]
 *                    }
 */
export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) => {
    return list.reduce(
        (sum, currentItem) => {
            const group = getKey(currentItem);
            if (!sum[group]) {
                sum[group] = [];
            }
            sum[group].push(currentItem);
            return sum;
        },
        {} as Record<K, T[]>);
}
