export function detectDivergences(data1: number[], data2: number[]): number[] {
    const divergences: number[] = [];

    for (let i = 2; i < data1.length; i++) {
        const currentDiff = data1[i] - data2[i];
        const prevDiff = data1[i - 1] - data2[i - 1];
        const prevPrevDiff = data1[i - 2] - data2[i - 2];

        if ((prevPrevDiff < 0 && prevDiff > 0 && currentDiff < 0) ||
            (prevPrevDiff > 0 && prevDiff < 0 && currentDiff > 0)) {
            divergences.push(i);
        }
    }

    return divergences;
}
