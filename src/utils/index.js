import * as R from "ramda";

export const hasData = R.compose(R.not, R.either(R.isNil, R.isEmpty));
