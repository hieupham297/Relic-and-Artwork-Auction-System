export const searchFunction = (searchTerm, data) => {
  const result = data.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return result;
};

export const filterByStatus = (statusFilters, data) => {
  if (statusFilters.all) {
    return data;
  } else {
    return data.filter((product) => {
      if (statusFilters.upcoming && product.status === "Chưa diễn ra") {
        return true;
      }
      if (statusFilters.ongoing && product.status === "Đang diễn ra") {
        return true;
      }
      if (statusFilters.completed && product.status === "Đã kết thúc") {
        return true;
      }
      return false;
    });
  }
};

export const filterFromDateToDate = (startDate, endDate, data) => {};

export const findAuctionById = (id, data) => {
  return data.find((auction) => auction.auctionId === id);
};

export const handleLogin = (userName, password, data) => {
  const user = data.find((account) => account.userName === userName);

  if (!user) {
    return { error: "Tài khoản hoặc mật khẩu không trùng khớp!" };
  }

  if (user.password !== password) {
    return { error: "Tài khoản hoặc mật khẩu không trùng khớp!" };
  }

  return { user };
};
