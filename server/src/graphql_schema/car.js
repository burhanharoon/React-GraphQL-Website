import { Car, CarTC } from '../models/car'

export const CarQuery = {
    carById: CarTC.getResolver('findById'),
    carByIds: CarTC.getResolver('findByIds'),
    carOne: CarTC.getResolver('findOne'),
    carMany: CarTC.getResolver('findMany'),
    carCount: CarTC.getResolver('count'),
    carConnection: CarTC.getResolver('connection'),
    carPagination: CarTC.getResolver('pagination'),
};

export const CarMutation = {
    carCreateOne: CarTC.getResolver('createOne'),
    carCreateMany: CarTC.getResolver('createMany'),
    carUpdateById: CarTC.getResolver('updateById'),
    carUpdateOne: CarTC.getResolver('updateOne'),
    carUpdateMany: CarTC.getResolver('updateMany'),
    carRemoveById: CarTC.getResolver('removeById'),
    carRemoveOne: CarTC.getResolver('removeOne'),
    carRemoveMany: CarTC.getResolver('removeMany'),
}
