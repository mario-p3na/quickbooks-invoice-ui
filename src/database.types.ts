export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      invoices: {
        Row: {
          AllowIPNPayment: boolean | null;
          AllowOnlineACHPayment: boolean | null;
          AllowOnlineCreditCardPayment: boolean | null;
          AllowOnlinePayment: boolean | null;
          ApplyTaxAfterDiscount: boolean | null;
          Balance: number | null;
          BillAddr: Json | null;
          BillEmail: Json | null;
          CurrencyRef: Json | null;
          CustomerMemo: Json | null;
          CustomerRef: Json | null;
          CustomField: Json | null;
          DeliveryInfo: Json | null;
          DocNumber: string | null;
          domain: string | null;
          DueDate: string | null;
          EmailStatus: string | null;
          FreeFormAddress: boolean | null;
          Id: string;
          Line: Json | null;
          LinkedTxn: Json | null;
          MetaData: Json | null;
          PrintStatus: string | null;
          PrivateNote: string | null;
          SalesTermRef: Json | null;
          ShipAddr: Json | null;
          sparse: boolean | null;
          SyncToken: string | null;
          TotalAmt: number | null;
          TxnDate: string | null;
          TxnTaxDetail: Json | null;
        };
        Insert: {
          AllowIPNPayment?: boolean | null;
          AllowOnlineACHPayment?: boolean | null;
          AllowOnlineCreditCardPayment?: boolean | null;
          AllowOnlinePayment?: boolean | null;
          ApplyTaxAfterDiscount?: boolean | null;
          Balance?: number | null;
          BillAddr?: Json | null;
          BillEmail?: Json | null;
          CurrencyRef?: Json | null;
          CustomerMemo?: Json | null;
          CustomerRef?: Json | null;
          CustomField?: Json | null;
          DeliveryInfo?: Json | null;
          DocNumber?: string | null;
          domain?: string | null;
          DueDate?: string | null;
          EmailStatus?: string | null;
          FreeFormAddress?: boolean | null;
          Id: string;
          Line?: Json | null;
          LinkedTxn?: Json | null;
          MetaData?: Json | null;
          PrintStatus?: string | null;
          PrivateNote?: string | null;
          SalesTermRef?: Json | null;
          ShipAddr?: Json | null;
          sparse?: boolean | null;
          SyncToken?: string | null;
          TotalAmt?: number | null;
          TxnDate?: string | null;
          TxnTaxDetail?: Json | null;
        };
        Update: {
          AllowIPNPayment?: boolean | null;
          AllowOnlineACHPayment?: boolean | null;
          AllowOnlineCreditCardPayment?: boolean | null;
          AllowOnlinePayment?: boolean | null;
          ApplyTaxAfterDiscount?: boolean | null;
          Balance?: number | null;
          BillAddr?: Json | null;
          BillEmail?: Json | null;
          CurrencyRef?: Json | null;
          CustomerMemo?: Json | null;
          CustomerRef?: Json | null;
          CustomField?: Json | null;
          DeliveryInfo?: Json | null;
          DocNumber?: string | null;
          domain?: string | null;
          DueDate?: string | null;
          EmailStatus?: string | null;
          FreeFormAddress?: boolean | null;
          Id?: string;
          Line?: Json | null;
          LinkedTxn?: Json | null;
          MetaData?: Json | null;
          PrintStatus?: string | null;
          PrivateNote?: string | null;
          SalesTermRef?: Json | null;
          ShipAddr?: Json | null;
          sparse?: boolean | null;
          SyncToken?: string | null;
          TotalAmt?: number | null;
          TxnDate?: string | null;
          TxnTaxDetail?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
