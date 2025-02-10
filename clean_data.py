import re

def clean_data(messages):
    cleaned_messages = []
    for message in messages:
        # Normalize amounts (e.g., "23000 RWF" -> 23000)
        amount_match = re.search(r'\d+ RWF', message)
        amount = int(amount_match.group().split()[0]) if amount_match else None

        # Normalize dates (e.g., "2025-02-08 14:30:20")
        date_match = re.search(r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}', message)
        date = date_match.group() if date_match else None

        # Extract transaction ID (if available)
        tx_id_match = re.search(r'Financial Transaction Id: (\d+)', message) or re.search(r'TxId: (\d+)', message)
        tx_id = tx_id_match.group(1) if tx_id_match else None

        cleaned_messages.append({
            'body': message,
            'amount': amount,
            'date': date,
            'transaction_id': tx_id
        })

    return cleaned_messages

# Example usage
if __name__ == "__main__":
    messages = [...]  # Replace with parsed messages from parse_xml.py
    cleaned_messages = clean_data(messages)
    print(cleaned_messages[:5])  # Print first 5 cleaned messages