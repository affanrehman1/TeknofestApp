import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { deleteExpense, getExpenses } from "../models/expenseModel";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
};

export default function HomeScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const fetchExpenses = () => {
    getExpenses().then(setExpenses);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <View>
      {expenses.map((e) => (
        <View key={e.id}>
          <Text>
            {e.title} - {e.amount} - {e.category}
          </Text>
          <Button
            title="Delete"
            onPress={() => deleteExpense(e.id).then(fetchExpenses)}
          />
        </View>
      ))}
    </View>
  );
}
