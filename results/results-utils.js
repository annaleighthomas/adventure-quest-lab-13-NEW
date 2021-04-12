export function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 35) {
        return 'frail';
    }
    return 'healthy';
}

export function scoreGold(gold) {
    if (gold === 0) {
        return 'poor';
    }
    else if (gold < 50) {
        return 'modest';
    }
    return 'rich';
}

